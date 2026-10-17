import {cellParts,excelDate,validateProfile} from './extract.mjs';
const NS='http://schemas.openxmlformats.org/spreadsheetml/2006/main';
const xml=s=>{const d=new DOMParser().parseFromString(s,'application/xml');if(d.querySelector('parsererror'))throw Error('El Excel contiene XML inválido.');return d;};
const serialize=d=>new XMLSerializer().serializeToString(d);
const elements=(d,name)=>Array.from(d.getElementsByTagNameNS('*',name));
function resolvePath(base,target){const parts=(target.startsWith('/')?target.slice(1):base+'/'+target).split('/'),out=[];for(const p of parts){if(p==='..')out.pop();else if(p&&p!=='.')out.push(p);}return out.join('/');}
export async function openWorkbook(bytes){
 const zip=await globalThis.JSZip.loadAsync(bytes);
 const files=Object.values(zip.files);
 if(files.length>3000||files.reduce((sum,f)=>sum+(f._data?.uncompressedSize||0),0)>80*1024*1024)throw Error('El Excel es demasiado grande para esta miniapp.');
 if(files.some(f=>/vbaProject|activeX|externalLinks|embeddings/i.test(f.name)))throw Error('La plantilla contiene controles, macros o vínculos externos. Use la plantilla limpia incluida, o guarde una copia sin esos elementos.');
 if(!zip.file('xl/workbook.xml'))throw Error('Use un archivo Excel .xlsx válido.');
 const book=xml(await zip.file('xl/workbook.xml').async('string'));
 const rels=xml(await zip.file('xl/_rels/workbook.xml.rels').async('string'));
 const sheets=elements(book,'sheet').map(s=>{
  const rid=s.getAttribute('r:id');const rel=elements(rels,'Relationship').find(r=>r.getAttribute('Id')===rid);
  if(!rel)throw Error('No se encontró la hoja de Excel.');
  return {name:s.getAttribute('name'),path:resolvePath('xl',rel.getAttribute('Target'))};
 });
 const strings=zip.file('xl/sharedStrings.xml')?elements(xml(await zip.file('xl/sharedStrings.xml').async('string')),'si').map(si=>elements(si,'t').map(t=>t.textContent).join('')):[];
 return {bytes,zip,sheets,strings,date1904:elements(book,'workbookPr')[0]?.getAttribute('date1904')==='1'};
}
function cellText(c,strings){const type=c.getAttribute('t');if(type==='s')return strings[Number(elements(c,'v')[0]?.textContent)]||'';if(type==='inlineStr')return elements(c,'t').map(t=>t.textContent).join('');return elements(c,'v')[0]?.textContent||'';}
export async function sheetInfo(wb,sheetName){
 const sheet=wb.sheets.find(s=>s.name===sheetName);if(!sheet)throw Error('La hoja «'+sheetName+'» no existe. Ajuste el mapeo.');
 const doc=xml(await wb.zip.file(sheet.path).async('string'));
 return {sheet,doc,cells:elements(doc,'c').map(c=>({cell:c.getAttribute('r'),value:cellText(c,wb.strings),formula:elements(c,'f').length>0})),merges:elements(doc,'mergeCell').map(m=>m.getAttribute('ref'))};
}
function mergedAnchor(cell,merges){const p=cellParts(cell);for(const r of merges){const [a,b]=r.split(':'),lo=cellParts(a),hi=cellParts(b||a);if(p.col>=lo.col&&p.col<=hi.col&&p.row>=lo.row&&p.row<=hi.row)return a;}return cell;}
function typedValue(f,value,date1904){
 if(value===''||value==null)return {type:'text',value:''};
 if(f.kind==='date')return {type:'number',value:excelDate(value)-(date1904?1462:0)};
 if(f.kind==='time'){
  const m=/^(\d{1,2}):(\d{2})(?::(\d{2}))?$/.exec(value.trim());
  if(!m||+m[1]>23||+m[2]>59||+(m[3]||0)>59)throw Error(f.label+': use HH:MM entre 00:00 y 23:59.');
  return {type:'number',value:(+m[1]*3600 + +m[2]*60 + +(m[3]||0))/86400};
 }
 if(f.kind==='number'){
  const str=String(value).trim();if(!/^-?\d+(?:\.\d+)?$/.test(str))throw Error(f.label+': escriba un número sin separadores de miles, con punto decimal.');
  return {type:'number',value:Number(str)};
 }
 return {type:'text',value:String(value)};
}
function putCell(doc,address,value){
 const {row,col}=cellParts(address),data=elements(doc,'sheetData')[0];
 let r=elements(data,'row').find(r=>+r.getAttribute('r')===row);
 if(!r){r=doc.createElementNS(NS,'row');r.setAttribute('r',row);const next=elements(data,'row').find(r=>+r.getAttribute('r')>row);data.insertBefore(r,next||null);}
 let c=elements(r,'c').find(c=>c.getAttribute('r')===address);
 if(!c){c=doc.createElementNS(NS,'c');c.setAttribute('r',address);const next=elements(r,'c').find(c=>cellParts(c.getAttribute('r')).col>col);r.insertBefore(c,next||null);}
 for(const name of ['v','f','is'])for(const e of elements(c,name))e.remove();
 c.removeAttribute('t');
 if(value.type==='number'){const v=doc.createElementNS(NS,'v');v.textContent=String(value.value);c.appendChild(v);}
 else if(value.value!==''){c.setAttribute('t','inlineStr');const is=doc.createElementNS(NS,'is'),t=doc.createElementNS(NS,'t');t.setAttribute('xml:space','preserve');t.textContent=value.value;is.appendChild(t);c.appendChild(is);}
}
export async function exportWorkbook(wb,profile,values){
 validateProfile(profile);
 const zip=await globalThis.JSZip.loadAsync(wb.bytes),changed=new Map(),destinations=new Set();
 async function put(sheetName,cell,value){
  if(!cell)return;
  if(!changed.has(sheetName))changed.set(sheetName,await sheetInfo(wb,sheetName));
  const info=changed.get(sheetName),anchor=mergedAnchor(cell,info.merges),key=sheetName+'!'+anchor;
  if(destinations.has(key))throw Error('Hay dos campos asignados a '+key+'. Corrija el mapeo.');destinations.add(key);
  putCell(info.doc,anchor,value);
 }
 for(const f of profile.fields){
  const v=values[f.id]??'';
  for(const t of f.targets||[]){const tv=typedValue(f,v,wb.date1904);if(t.prefix){tv.type='text';tv.value=t.prefix+(v||'');}await put(t.sheet||profile.sheet,t.cell,tv);}
  const selected=Array.isArray(v)?v:[v];
  for(const o of f.options||[])await put(o.sheet||f.sheet||profile.sheet,o.cell,{type:'text',value:selected.includes(o.value)?'X':''});
 }
 for(const info of changed.values())zip.file(info.sheet.path,serialize(info.doc));
 // Remove stale shared strings throughout the workbook, including unused historical values.
 for(const s of wb.sheets){const doc=changed.get(s.name)?.doc||xml(await zip.file(s.path).async('string'));for(const c of elements(doc,'c')){if(c.getAttribute('t')==='s'){const text=cellText(c,wb.strings);putCell(doc,c.getAttribute('r'),{type:'text',value:text});}}zip.file(s.path,serialize(doc));}
 if(zip.file('xl/sharedStrings.xml'))zip.file('xl/sharedStrings.xml','<?xml version="1.0" encoding="UTF-8" standalone="yes"?><sst xmlns="'+NS+'" count="0" uniqueCount="0"/>');
 await removeDocumentProperties(zip);
 return zip.generateAsync({type:'uint8array',compression:'DEFLATE',compressionOptions:{level:6}});
}

export async function removeDocumentProperties(zip){
 // Discard document provenance, including custom author/company properties.
 zip.remove('docProps');
 const relsFile=zip.file('_rels/.rels');
 if(relsFile){const d=xml(await relsFile.async('string'));for(const e of elements(d,'Relationship'))if(/(?:metadata\/core-properties|extended-properties|custom-properties)$/.test(e.getAttribute('Type')||'')||/^\/?docProps\//.test(e.getAttribute('Target')||''))e.remove();zip.file('_rels/.rels',serialize(d));}
 const typesFile=zip.file('[Content_Types].xml');
 if(typesFile){const d=xml(await typesFile.async('string'));for(const e of elements(d,'Override'))if(/^\/docProps\//.test(e.getAttribute('PartName')||''))e.remove();zip.file('[Content_Types].xml',serialize(d));}
 zip.comment='';
 for(const file of Object.values(zip.files)){file.date=new Date('2000-01-01T00:00:00Z');file.comment='';}
}
