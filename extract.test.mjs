import test from 'node:test';
import assert from 'node:assert/strict';
import {extractFields, excelDate, validateProfile} from './extract.mjs';
const profile={fields:[{id:'name',kind:'text',box:[.1,.2,.4,.3],page:1},{id:'choice',kind:'choice',options:[{value:'SI',box:[.1,.4,.15,.45]},{value:'NO',box:[.2,.4,.25,.45]}],page:1}],anchors:[]};
test('lee datos por posición sin confundir orden de texto ni casilla',()=>{
 const p=[{items:[{str:'NO',x:.18,y:.42},{str:'ANA NUEVA',x:.12,y:.25},{str:'X',x:.11,y:.44}]}];
 const r=extractFields(p,profile);assert.equal(r.values.name,'ANA NUEVA');assert.equal(r.values.choice,'SI');
});
test('documento siguiente no conserva valores anteriores',()=>{
 extractFields([{items:[{str:'ANA',x:.12,y:.25}]}],profile);
 const r=extractFields([{items:[]}],profile);assert.equal(r.values.name,'');assert.equal(r.values.choice,'');
});
test('dos marcas en opción única requieren revisión',()=>{
 const r=extractFields([{items:[{str:'X',x:.11,y:.44},{str:'X',x:.21,y:.44}]}],profile);
 assert.equal(r.values.choice,'');assert.ok(r.issues.choice);
});
test('fechas colombianas válidas, sin convertir fecha imposible',()=>{
 assert.equal(excelDate('11/05/2026'),46153);assert.throws(()=>excelDate('31/02/2026'));assert.throws(()=>excelDate('11/13/2026'));
});
test('mapeos inválidos no se aceptan',()=>{
 assert.throws(()=>validateProfile({fields:[{id:'x',kind:'text',targets:[{cell:'A0'}]}]}));
 assert.throws(()=>validateProfile({fields:[{id:'x',kind:'text',box:[0,0,2,1]}]}));
});
