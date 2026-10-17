export function sheetOptions(sheets, selected) {
 const options=sheets.map(sheet=>({name:sheet.name,label:sheet.name,selected:sheet.name===selected}));
 if(!options.some(option=>option.selected))options.unshift({name:'',label:'Selecciona la hoja de tu plantilla',selected:true});
 return options;
}
