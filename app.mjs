import {PROFILE} from './profile.mjs';
import {extractFields,checkLayout,validateProfile,valuePresent} from './extract.mjs';
import {openWorkbook,exportWorkbook} from './workbook.mjs';
import {sheetOptions} from './mapping.mjs';
const $=id=>document.getElementById(id),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let profile=structuredClone(PROFILE),workbook=null,pdf=null,pages=[],values={},issues={},busy=false,customTemplate=false,layoutError='',mappingDirty=false,sequence=0,pdfTask=null,zoneTarget=null,zoneBox=null,dragStart=null,renderTask=null;
const pdfjs=globalThis.PDFJS;
const defaultBytes=()=>Uint8Array.from(atob(globalThis.TEMPLATE_BASE64),c=>c.charCodeAt(0));
function notice(message,kind=''){ $('notice').textContent=message;$('notice').className='notice '+kind;$('notice').hidden=!message; }
function download(bytes,name,type){const url=URL.createObjectURL(new Blob([bytes],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500);}
function invalidate(){ $('reviewed').checked=false;refreshExport(); }
function refreshExport(){
 const valid=pdf&&pages.length>0&&!layoutError&&workbook&&!busy&&!mappingDirty;
 $('reviewed').disabled=!valid;
 $('export').disabled=!valid||!$('reviewed').checked||(customTemplate&&!$('template-clean').checked);
 $('export-help').textContent=busy?'Procesando en tu navegador…':!pdf?'Carga un PDF para comenzar.':layoutError?'Ajusta el mapeo para este PDF.':mappingDirty?'Aplica los cambios en Mapeo antes de exportar.':!workbook?'Carga una plantilla válida.':customTemplate&&!$('template-clean').checked?'Confirma que la plantilla está vacía.':!$('reviewed').checked?'Confirma la revisión para habilitar la descarga.':'Se descargará un archivo Excel editable en tu equipo.';
 $('show-pdf').disabled=!pdf||busy;
 for(const id of ['pdf-file','template-file','map-file','reset','mapping-open','map-apply'])$(id).disabled=busy;
}
async function useDefault(){workbook=await openWorkbook(defaultBytes());customTemplate=false;$('template-name').textContent='Investigación AT 1401';$('template-description').textContent='Plantilla limpia incluida · .xlsx';$('custom-template').hidden=true;$('template-clean').checked=false;}
function renderFields(){
 $('empty-state').hidden=!!pages.length;$('review-content').hidden=!pages.length;$('step-review').classList.toggle('active',!!pages.length);
 const filter=$('search').value.toLocaleLowerCase(),onlyEmpty=$('only-empty').checked,groups=new Map();
 for(const f of profile.fields){if(filter&&!String(f.label||f.id).toLocaleLowerCase().includes(filter))continue;if(onlyEmpty&&valuePresent(values[f.id]))continue;if(!groups.has(f.group))groups.set(f.group,[]);groups.get(f.group).push(f);}
 $('fields').innerHTML=[...groups].map(([group,fields])=>`<section class="field-group"><h3>${esc(group||'Otros campos')}</h3><div class="field-grid">${fields.map(fieldHtml).join('')}</div></section>`).join('')||'<p class="muted compact">No hay campos que coincidan con el filtro.</p>';
 const count=profile.fields.filter(f=>valuePresent(values[f.id])).length;$('filled-count').textContent=count;$('blank-count').textContent=(profile.fields.length-count)+' vacíos';
}
function fieldHtml(f){
 const v=values[f.id]??'',id='field-'+f.id,targets=[...(f.targets||[]).map(t=>t.cell),...(f.options||[]).filter(o=>o.cell).map(o=>o.cell)].filter(Boolean);
 let control;
 if(f.kind==='multi')control=`<div class="multi-options">${f.options.map(o=>`<label class="multi-option"><input type="checkbox" data-field="${f.id}" value="${esc(o.value)}" ${Array.isArray(v)&&v.includes(o.value)?'checked':''}>${esc(o.label)}</label>`).join('')}</div>`;
 else if(f.options)control=`<select id="${id}" data-field="${f.id}"><option value="">Sin dato / sin marca</option>${f.options.map(o=>`<option value="${esc(o.value)}" ${v===o.value?'selected':''}>${esc(o.label)}</option>`).join('')}</select>`;
 else if(f.kind==='long'||String(v).length>100)control=`<textarea id="${id}" data-field="${f.id}" rows="3" autocomplete="off">${esc(v)}</textarea>`;
 else control=`<input id="${id}" data-field="${f.id}" type="text" autocomplete="off" spellcheck="false" value="${esc(v)}" placeholder="${f.kind==='date'?'DD/MM/AAAA':f.kind==='time'?'HH:MM':'No aparece en el PDF'}" ${f.kind==='number'?'inputmode="decimal"':''}>`;
 return `<div class="field ${f.kind==='long'||f.kind==='multi'?'wide':''} ${issues[f.id]?'has-issue':''}"><label for="${id}">${esc(f.label)}${f.required?' *':''}</label>${control}<small>${targets.length?'Excel: '+esc(targets.slice(0,5).join(', '))+(targets.length>5?'…':''):'Solo consulta: sin celda asignada'}</small>${issues[f.id]?`<small class="field-note">${esc(issues[f.id])}</small>`:''}</div>`;
}
$('fields').addEventListener('input',e=>{
 const key=e.target.dataset.field;if(!key)return;const f=profile.fields.find(f=>f.id===key);
 values[key]=f.kind==='multi'?Array.from($('fields').querySelectorAll(`input[data-field="${key}"]:checked`)).map(el=>el.value):e.target.value;
 if(key==='name')for(const part of profile.fields.filter(f=>Number.isInteger(f.derived))){values[part.id]='';issues[part.id]='El nombre completo cambió. Complete esta parte del nombre.';const input=$('field-'+part.id);if(input){input.value='';input.placeholder='Completar después de cambiar el nombre';}}
 delete issues[key];invalidate();const count=profile.fields.filter(f=>valuePresent(values[f.id])).length;$('filled-count').textContent=count;$('blank-count').textContent=(profile.fields.length-count)+' vacíos';
});
async function loadPdf(file){
 if(!file)return;const token=++sequence;busy=true;notice('');values={};issues={};pages=[];layoutError='';$('reviewed').checked=false;$('step-export').classList.remove('active');$('pdf-name').textContent='Leyendo informe…';$('pdf-detail').textContent='Todo se procesa en este dispositivo.';renderFields();refreshExport();
 try{
  if(pdf){await pdf.destroy();pdf=null;}if(pdfTask){await pdfTask.destroy();pdfTask=null;}
  if(file.size>15*1024*1024)throw Error('El PDF supera el límite de 15 MB.');
  const bytes=new Uint8Array(await file.arrayBuffer());if(new TextDecoder().decode(bytes.slice(0,5))!=='%PDF-')throw Error('Selecciona un archivo PDF válido.');
  pdfTask=pdfjs.getDocument({data:bytes,useSystemFonts:true,isEvalSupported:false,enableXfa:false,disableAutoFetch:true,disableStream:true,stopAtErrors:true});
  pdfTask.onPassword=()=>{pdfTask.destroy();};
  const loaded=await pdfTask.promise;if(token!==sequence){await loaded.destroy();return;}pdf=loaded;pdfTask=null;
  if(pdf.numPages>20)throw Error('Este informe tiene más de 20 páginas. Usa el PDF del reporte individual.');
  for(let n=1;n<=pdf.numPages;n++){
   const page=await pdf.getPage(n),v=page.getViewport({scale:1}),content=await page.getTextContent();
   pages.push({width:v.width,height:v.height,items:content.items.filter(i=>i.str?.trim()).map(i=>{const t=pdfjs.Util.transform(v.transform,i.transform);return {str:i.str.trim(),x:t[4]/v.width,y:t[5]/v.height,w:i.width/v.width,h:i.height/v.height};})});
  }
  layoutError=checkLayout(pages,profile);
  if(!layoutError){({values,issues}=extractFields(pages,profile));mappingDirty=false;notice('Informe leído. Revisa los campos y confirma antes de descargar.','success');}
  else notice(layoutError,'error');
  $('pdf-name').textContent=file.name;$('pdf-detail').textContent=pdf.numPages+' página'+(pdf.numPages>1?'s':'')+' · '+Math.ceil(file.size/1024)+' KB';
  $('pdf-page').innerHTML=pages.map((_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');
 }catch(e){if(pdf){await pdf.destroy();pdf=null;}pages=[];values={};issues={};$('pdf-name').textContent='Selecciona otro PDF';$('pdf-detail').textContent='No se pudo leer el archivo';notice(e.name==='PasswordException'?'El PDF está protegido con contraseña. Usa una copia sin contraseña.':e.message||'No se pudo leer el PDF.','error');}
 finally{busy=false;$('pdf-file').value='';renderFields();refreshExport();}
}
$('pdf-file').addEventListener('change',e=>loadPdf(e.target.files[0]));
for(const type of ['dragenter','dragover'])$('dropzone').addEventListener(type,e=>{e.preventDefault();$('dropzone').classList.add('dragover');});
for(const type of ['dragleave','drop'])$('dropzone').addEventListener(type,e=>{e.preventDefault();$('dropzone').classList.remove('dragover');});
$('dropzone').addEventListener('drop',e=>{if(!busy)loadPdf(e.dataTransfer.files[0]);});
$('template-file').addEventListener('change',async e=>{
 const file=e.target.files[0];if(!file)return;busy=true;workbook=null;invalidate();notice('');
 try{
  if(file.size>15*1024*1024)throw Error('La plantilla supera el límite de 15 MB.');
  const bytes=new Uint8Array(await file.arrayBuffer());
  if(bytes[0]===0xd0&&bytes[1]===0xcf)throw Error('Convierte este XLS antiguo a Libro de Excel (.xlsx), sin controles ActiveX, o usa la plantilla limpia incluida.');
  workbook=await openWorkbook(bytes);customTemplate=true;$('template-name').textContent=file.name;$('template-description').textContent=workbook.sheets.length+' hojas · ajusta las celdas en Mapeo';$('custom-template').hidden=false;$('template-clean').checked=false;notice('Plantilla cargada. Comprueba la hoja y las celdas en Mapeo antes de exportar.');
 }catch(error){await useDefault();notice(error.message+' Se mantiene la plantilla limpia incluida.','error');}
 finally{busy=false;e.target.value='';refreshExport();}
});
$('download-template').addEventListener('click',()=>download(defaultBytes(),'plantilla-investigacion-at.xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'));
$('reviewed').addEventListener('change',refreshExport);$('template-clean').addEventListener('change',refreshExport);$('search').addEventListener('input',renderFields);$('only-empty').addEventListener('change',renderFields);
$('export').addEventListener('click',async()=>{
 busy=true;refreshExport();notice('');
 try{
  const missing=profile.fields.filter(f=>f.required&&!valuePresent(values[f.id]));if(missing.length)throw Error('Completa los campos necesarios: '+missing.map(f=>f.label).join(', ')+'.');
  const unmapped=profile.fields.flatMap(f=>(f.options||[]).filter(o=>(Array.isArray(values[f.id])?values[f.id]:[values[f.id]]).includes(o.value)&&!o.cell).map(o=>f.label+': '+o.label));if(unmapped.length)throw Error('Estas respuestas no tienen celda en el formato: '+unmapped.join(', ')+'. Asigna una celda en Mapeo.');
  const bytes=await exportWorkbook(workbook,profile,values);
  download(bytes,'informe-completado.xlsx','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');$('step-export').classList.add('active');notice('Excel descargado. Los apartados de investigación y firmas quedan disponibles para completar en Excel.','success');
 }catch(e){notice(e.message,'error');$('notice').scrollIntoView({behavior:'smooth',block:'center'});}
 finally{busy=false;refreshExport();}
});
$('reset').addEventListener('click',async()=>{
 ++sequence;if(renderTask){renderTask.cancel();renderTask=null;}if(pdf)await pdf.destroy();if(pdfTask)await pdfTask.destroy();pdf=null;pdfTask=null;pages=[];values={};issues={};profile=structuredClone(PROFILE);layoutError='';mappingDirty=false;zoneTarget=null;zoneBox=null;
 await useDefault();for(const id of ['pdf-file','template-file','map-file','search'])$(id).value='';$('only-empty').checked=false;$('reviewed').checked=false;$('pdf-name').textContent='Arrastra tu PDF aquí';$('pdf-detail').textContent='o haz clic para buscarlo';$('fields').replaceChildren();$('mapping-fields').replaceChildren();$('pdf-page').replaceChildren();const canvas=$('pdf-canvas');canvas.width=1;canvas.height=1;$('zone-selection').hidden=true;$('custom-layout').checked=false;for(const d of document.querySelectorAll('dialog'))d.close();$('step-export').classList.remove('active');renderFields();refreshExport();notice('Sesión borrada. Puedes comenzar con otro informe.','success');
});
function renderMapping(){
 $('map-sheet').innerHTML=sheetOptions(workbook?.sheets||[],profile.sheet).map(s=>`<option value="${esc(s.name)}" ${s.selected?'selected':''} ${s.name?'':'disabled'}>${esc(s.label)}</option>`).join('');
 $('custom-layout').checked=!(profile.anchors?.length);
 $('mapping-fields').innerHTML=profile.fields.map(f=>`<div class="map-row"><label>${esc(f.label)}<small>${esc(f.group)} · ${esc(f.kind)}</small></label><input aria-label="Celdas para ${esc(f.label)}" data-targets="${f.id}" placeholder="Celda: A1" value="${esc((f.targets||[]).map(t=>t.cell).join(', '))}"><input type="number" min="1" max="20" aria-label="Página para ${esc(f.label)}" data-page="${f.id}" value="${f.page||1}"><button class="button secondary small" data-zone="${f.id}" ${!pdf||f.options&&!f.textBox?'disabled':''}>Elegir zona</button>${f.options?`<details><summary>Casillas: ${f.options.length} opciones</summary>${f.options.map((o,i)=>`<div class="map-option"><label>${esc(o.label)}</label><input data-option="${f.id}:${i}" aria-label="Celda ${esc(o.label)}" placeholder="Celda" value="${esc(o.cell)}"><button class="button secondary small" data-zone="${f.id}:${i}" ${!pdf?'disabled':''}>Zona de marca</button></div>`).join('')}</details>`:''}</div>`).join('');
}
$('mapping-open').addEventListener('click',()=>{renderMapping();$('mapping-dialog').showModal();});
$('mapping-fields').addEventListener('change',e=>{
 const t=e.target;
 if(t.dataset.targets){const f=profile.fields.find(f=>f.id===t.dataset.targets);f.targets=t.value.split(',').map(s=>s.trim().toUpperCase()).filter(Boolean).map((cell,i)=>({cell,sheet:profile.sheet,prefix:f.targets?.[i]?.prefix||''}));}
 if(t.dataset.page)profile.fields.find(f=>f.id===t.dataset.page).page=Number(t.value);
 if(t.dataset.option){const [id,index]=t.dataset.option.split(':');profile.fields.find(f=>f.id===id).options[Number(index)].cell=t.value.trim().toUpperCase();}
 mappingDirty=true;invalidate();
});
$('map-sheet').addEventListener('change',e=>{profile.sheet=e.target.value;for(const f of profile.fields){for(const t of f.targets||[])t.sheet=profile.sheet;for(const o of f.options||[])delete o.sheet;delete f.sheet;}mappingDirty=true;invalidate();});
$('map-download').addEventListener('click',()=>{try{validateProfile(profile);download(JSON.stringify(profile,null,2),'mapeo-pdf-excel.json','application/json');}catch(e){notice(e.message,'error');$('mapping-dialog').close();}});
$('map-file').addEventListener('change',async e=>{
 try{const file=e.target.files[0];if(!file)return;if(file.size>1024*1024)throw Error('El mapeo supera 1 MB.');const data=JSON.parse(await file.text());validateProfile(data);profile=data;mappingDirty=true;renderMapping();invalidate();}
 catch(error){notice(error.message,'error');$('mapping-dialog').close();}finally{e.target.value='';}
});
$('map-reset').addEventListener('click',()=>{profile=structuredClone(PROFILE);mappingDirty=true;renderMapping();invalidate();});
$('custom-layout').addEventListener('change',e=>{profile.anchors=e.target.checked?[]:structuredClone(PROFILE.anchors);mappingDirty=true;invalidate();});
$('map-apply').addEventListener('click',()=>{
 try{validateProfile(profile);if(!$('map-sheet').value||!workbook?.sheets.some(s=>s.name===profile.sheet))throw Error('Selecciona una hoja válida de tu plantilla en Mapeo.');if(pages.length){layoutError=checkLayout(pages,profile);if(layoutError)throw Error(layoutError);({values,issues}=extractFields(pages,profile));renderFields();}mappingDirty=false;invalidate();$('mapping-dialog').close();notice('Mapeo aplicado. Los datos se volvieron a leer desde el PDF.');}
 catch(e){$('mapping-dialog').close();notice(e.message,'error');refreshExport();}
});
$('add-field').addEventListener('click',()=>{const id='campo'+Date.now();profile.fields.push({id,label:'Campo adicional '+(profile.fields.filter(f=>f.id.startsWith('campo')).length+1),group:'Campos adicionales',kind:'text',page:1,targets:[],box:[0,0,0,0]});mappingDirty=true;renderMapping();$('mapping-fields').scrollTop=$('mapping-fields').scrollHeight;invalidate();});
for(const b of document.querySelectorAll('[data-close]'))b.addEventListener('click',()=>$(b.dataset.close).close());
async function renderPdf(){
 if(!pdf)return;if(renderTask)renderTask.cancel();const n=Number($('pdf-page').value)||1,page=await pdf.getPage(n),view=page.getViewport({scale:1.35}),canvas=$('pdf-canvas');canvas.width=Math.ceil(view.width);canvas.height=Math.ceil(view.height);
 renderTask=page.render({canvasContext:canvas.getContext('2d'),viewport:view});try{await renderTask.promise;}catch(e){if(e.name!=='RenderingCancelledException')throw e;}finally{renderTask=null;}
 drawZone();
}
function drawZone(){const el=$('zone-selection');el.hidden=!zoneBox;if(zoneBox){el.style.left=zoneBox[0]*100+'%';el.style.top=zoneBox[1]*100+'%';el.style.width=(zoneBox[2]-zoneBox[0])*100+'%';el.style.height=(zoneBox[3]-zoneBox[1])*100+'%';}}
async function showPdf(target=null){
 zoneTarget=target;zoneBox=null;$('zone-save').hidden=!target;$('pdf-title').textContent=target?'Seleccionar zona de lectura':'PDF de origen';$('zone-help').textContent=target?'Arrastra un rectángulo que contenga solo el valor o la marca X. Evita incluir la etiqueta.':'Consulta el documento y compáralo con los datos detectados.';
 if(target){const [id,index]=target.split(':'),f=profile.fields.find(f=>f.id===id);$('pdf-page').value=f.page||1;zoneBox=index!==undefined?f.options[Number(index)].box:f.textBox||f.box;}
 $('pdf-dialog').showModal();try{await renderPdf();}catch(e){notice('No se pudo mostrar el PDF: '+e.message,'error');}
}
$('show-pdf').addEventListener('click',()=>showPdf());
$('mapping-fields').addEventListener('click',e=>{const b=e.target.closest('[data-zone]');if(b&&!b.disabled)showPdf(b.dataset.zone);});
$('pdf-page').addEventListener('change',()=>{zoneBox=null;renderPdf();});
const point=e=>{const r=$('canvas-wrap').getBoundingClientRect();return [Math.max(0,Math.min(1,(e.clientX-r.left)/r.width)),Math.max(0,Math.min(1,(e.clientY-r.top)/r.height))];};
$('canvas-wrap').addEventListener('pointerdown',e=>{if(!zoneTarget)return;dragStart=point(e);e.currentTarget.setPointerCapture(e.pointerId);zoneBox=[...dragStart,...dragStart];drawZone();});
$('canvas-wrap').addEventListener('pointermove',e=>{if(!dragStart)return;const p=point(e);zoneBox=[Math.min(p[0],dragStart[0]),Math.min(p[1],dragStart[1]),Math.max(p[0],dragStart[0]),Math.max(p[1],dragStart[1])];drawZone();});
$('canvas-wrap').addEventListener('pointerup',()=>{dragStart=null;});
$('zone-save').addEventListener('click',()=>{
 if(!zoneBox||zoneBox[2]-zoneBox[0]<.002||zoneBox[3]-zoneBox[1]<.002)return;
 const [id,index]=zoneTarget.split(':'),f=profile.fields.find(f=>f.id===id);f.page=Number($('pdf-page').value);if(index!==undefined)f.options[Number(index)].box=zoneBox;else if(f.textBox)f.textBox=zoneBox;else{f.box=zoneBox;delete f.derived;}mappingDirty=true;invalidate();$('pdf-dialog').close();renderMapping();
});
window.addEventListener('pagehide',()=>{values={};issues={};pages=[];workbook=null;if(pdf)pdf.destroy();if(pdfTask)pdfTask.destroy();pdf=null;pdfTask=null;$('fields').replaceChildren();$('pdf-name').textContent='Arrastra tu PDF aquí';$('pdf-detail').textContent='o haz clic para buscarlo';$('template-name').textContent='Investigación AT 1401';$('notice').textContent='';for(const input of document.querySelectorAll('input[type="file"]'))input.value='';$('pdf-canvas').width=1;$('pdf-canvas').height=1;});
window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();});
await useDefault();refreshExport();
