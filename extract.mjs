const norm=s=>String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').toUpperCase().trim();
export function inBox(i,b){return b && i.x>=b[0]-.0004 && i.x<b[2] && i.y>=b[1] && i.y<=b[3];}
export function readBox(items,b){
 const selected=items.filter(i=>inBox(i,b));
 selected.sort((a,c)=>Math.abs(a.y-c.y)<.002?a.x-c.x:a.y-c.y);
 return selected.map(i=>i.str).join(' ').replace(/\s+/g,' ').trim();
}
export function extractFields(pages,profile){
 const values={},issues={};
 for(const f of profile.fields){
  const items=pages[(f.page||1)-1]?.items||[];
  if(f.options){
   const selected=f.options.filter(o=>items.some(i=>/^[xX×✓✔]$/.test(i.str.trim()) && inBox(i,o.box))).map(o=>o.value);
   if(f.textBox){const text=norm(readBox(items,f.textBox));values[f.id]=f.options.find(o=>norm(o.value)===text)?.value||'';}
   else if(f.kind==='multi')values[f.id]=selected;
   else if(selected.length>1){values[f.id]='';issues[f.id]='Hay varias marcas en una opción única. Revise el PDF.';}
   else values[f.id]=selected[0]||'';
  }else values[f.id]=f.box?readBox(items,f.box):'';
 }
 const name=(values.name||'').trim().split(/\s+/);
 const parts=name.length===4?name:name.length===3?[name[0],'',name[1],name[2]]:null;
 for(const f of profile.fields.filter(f=>Number.isInteger(f.derived))){values[f.id]=parts?.[f.derived]||'';issues[f.id]='Confirme la separación de nombres y apellidos.';}
 return {values,issues};
}
export function checkLayout(pages,profile){
 const items=pages[0]?.items||[];
 if(items.length<20)return 'El PDF no contiene suficiente texto legible. Use el PDF digital original; esta versión no lee escaneos.';
 for(const a of profile.anchors||[]){if(!items.some(i=>norm(i.str).includes(norm(a.text)) && Math.abs(i.y-a.y)<.008))return 'El diseño del PDF no coincide con el mapeo. Ajuste las zonas en «Mapeo» o use el informe del diseño configurado.';}
 return '';
}
export function excelDate(value){
 const m=/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(value.trim());
 if(!m)throw Error('Use una fecha en formato DD/MM/AAAA.');
 const [d,mo,y]=m.slice(1).map(Number),date=new Date(Date.UTC(y,mo-1,d));
 if(y<1901||y>9999||date.getUTCFullYear()!==y||date.getUTCMonth()!==mo-1||date.getUTCDate()!==d)throw Error('Fecha inválida: '+value);
 return (date.getTime()-Date.UTC(1899,11,30))/86400000;
}
export function cellParts(cell){
 const m=/^([A-Z]{1,3})([1-9]\d{0,6})$/.exec(cell);
 if(!m)throw Error('Celda inválida: '+cell);
 const col=[...m[1]].reduce((n,c)=>n*26+c.charCodeAt(0)-64,0),row=Number(m[2]);
 if(col>16384||row>1048576)throw Error('Celda fuera de Excel: '+cell);
 return {col,row};
}
export function validateProfile(p){
 if(!p||!Array.isArray(p.fields)||p.fields.length<1||p.fields.length>300)throw Error('El mapeo debe contener entre 1 y 300 campos.');
 const ids=new Set();
 for(const f of p.fields){
  if(!/^[a-zA-Z][a-zA-Z0-9_]{0,60}$/.test(f.id)||['constructor','prototype','__proto__'].includes(f.id)||ids.has(f.id))throw Error('Identificador de campo inválido o repetido.');ids.add(f.id);
  if(!['text','long','number','date','time','choice','multi'].includes(f.kind))throw Error('Tipo de campo inválido.');
  if(f.label!==undefined && (typeof f.label!=='string'||f.label.length>200))throw Error('Etiqueta de campo inválida.');
  if(f.group!==undefined && typeof f.group!=='string')throw Error('Grupo de campo inválido.');
  if(f.targets!==undefined&&!Array.isArray(f.targets))throw Error('Destinos de campo inválidos.');
  if(f.options!==undefined&&(!Array.isArray(f.options)||f.options.length>100))throw Error('Opciones inválidas.');
  if(f.page!==undefined && (!Number.isInteger(f.page)||f.page<1||f.page>20))throw Error('Página inválida.');
  const validBox=b=>{if(!Array.isArray(b)||b.length!==4||b.some(n=>!Number.isFinite(n)||n<0||n>1)||b[0]>b[2]||b[1]>b[3])throw Error('Zona PDF inválida.');};
  if(f.box)validBox(f.box);if(f.textBox)validBox(f.textBox);
  for(const t of f.targets||[]){if(!t||typeof t!=='object')throw Error('Destino inválido.');if(t.cell)cellParts(t.cell);if(t.prefix!==undefined&&typeof t.prefix!=='string')throw Error('Prefijo inválido.');}
  const choices=new Set();
  for(const o of f.options||[]){if(!o||typeof o.value!=='string'||choices.has(o.value)||typeof o.label!=='string')throw Error('Opción inválida o repetida.');choices.add(o.value);if(o.cell)cellParts(o.cell);if(o.box)validBox(o.box);}
 }
 if(p.anchors!==undefined&&(!Array.isArray(p.anchors)||p.anchors.some(a=>typeof a.text!=='string'||!Number.isFinite(a.y)||a.y<0||a.y>1)))throw Error('Anclas del PDF inválidas.');
 return true;
}
export function valuePresent(v){return Array.isArray(v)?v.length>0:String(v??'').trim()!=='';}
