import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const root=path.dirname(fileURLToPath(import.meta.url));
const req=createRequire(import.meta.url);
const dependency=name=>process.env.PDF_EXCEL_DEPS?path.join(process.env.PDF_EXCEL_DEPS,name):path.dirname(req.resolve(name+'/package.json'));
const source=async name=>fs.readFile(path.join(root,name),'utf8');
const cache=new Map();
async function moduleUrl(file){
 if(cache.has(file))return cache.get(file);
 let code=await source(file);
 const imports=[...code.matchAll(/from ['"]\.\/([^'"]+)['"]/g)];
 for(const m of imports)code=code.replace(m[0],'from '+JSON.stringify(await moduleUrl(m[1])));
 const url='data:text/javascript;base64,'+Buffer.from(code).toString('base64');cache.set(file,url);return url;
}
const pdf=await fs.readFile(path.join(dependency('pdfjs-dist'),'build/pdf.mjs'),'utf8');
const worker=await fs.readFile(path.join(dependency('pdfjs-dist'),'build/pdf.worker.mjs'),'utf8');
const zip=await fs.readFile(path.join(dependency('jszip'),'dist/jszip.min.js'),'utf8');
const template=await fs.readFile(path.join(root,'plantilla-limpia.xlsx'));
const bootstrap=`(async()=>{try{const decode=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));const moduleUrl=URL.createObjectURL(new Blob([decode(${JSON.stringify(Buffer.from(pdf).toString('base64'))})],{type:'text/javascript'}));globalThis.PDFJS=await import(moduleUrl);const workerUrl=URL.createObjectURL(new Blob([decode(${JSON.stringify(Buffer.from(worker).toString('base64'))})],{type:'text/javascript'}));PDFJS.GlobalWorkerOptions.workerSrc=workerUrl;globalThis.TEMPLATE_BASE64=${JSON.stringify(template.toString('base64'))};await import(${JSON.stringify(await moduleUrl('app.mjs'))});URL.revokeObjectURL(moduleUrl);}catch(error){const n=document.getElementById('notice');n.hidden=false;n.className='notice error';n.textContent='No se pudo iniciar la app. Usa una versión reciente de Chrome o Edge. '+error.message;console.error(error);}})();`;
let html=await source('index.template.html');html=html.replace('/*STYLE*/',await source('style.css')).replace('/*ZIP*/',zip.replace(/<\/script/gi,'<\\/script')).replace('/*BOOT*/',bootstrap);
await fs.writeFile(path.join(root,'index.html'),html);
await fs.writeFile(path.join(root,'.nojekyll'),'');
const pdfLicense=await fs.readFile(path.join(dependency('pdfjs-dist'),'LICENSE'),'utf8');
const zipLicense=await fs.readFile(path.join(dependency('jszip'),'LICENSE.markdown'),'utf8');
await fs.writeFile(path.join(root,'THIRD-PARTY-LICENSES.txt'),'PDF.js 5.6.205\nhttps://github.com/mozilla/pdf.js\n\n'+pdfLicense+'\n\nJSZip 3.10.1\nhttps://github.com/Stuk/jszip\n\n'+zipLicense);
console.log('index.html generado: '+(Buffer.byteLength(html)/1024/1024).toFixed(2)+' MB. Todas las dependencias incluidas, sin CDN.');
