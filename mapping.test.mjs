import test from 'node:test';
import assert from 'node:assert/strict';
import {sheetOptions} from './mapping.mjs';
test('plantilla con única hoja renombrada exige selección explícita',()=>{
 const options=sheetOptions([{name:'Hoja1'}],'FORMATO INV AT 1401');
 assert.deepEqual(options[0],{name:'',label:'Selecciona la hoja de tu plantilla',selected:true});
 assert.equal(options[1].name,'Hoja1');assert.equal(options[1].selected,false);
});
test('la hoja coincidente queda seleccionada sin opción vacía',()=>{
 assert.deepEqual(sheetOptions([{name:'Hoja1'}],'Hoja1'),[{name:'Hoja1',label:'Hoja1',selected:true}]);
});
