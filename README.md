# Formato: PDF a Excel

[Abrir la miniapp](https://serio0227.github.io/pdf-a-excel-local/)

Miniapp en español para pasar el informe digital de accidente al formato de investigación AT 1401 suministrado. Incluye una plantilla limpia y un mapeo inicial de 89 campos. No requiere servidor, cuenta, API ni conexión para procesar los archivos.

## Uso inmediato

1. Abre `index.html` con una versión reciente de Chrome o Edge. También puedes abrir la versión publicada en GitHub Pages.
2. Usa la plantilla limpia incluida, o carga una plantilla **vacía** en `.xlsx`.
3. Selecciona el PDF digital del accidente.
4. Revisa la información y corrige los campos necesarios. Verifica especialmente la separación de nombres y apellidos.
5. Marca «Revisé los datos y las casillas del informe» y pulsa «Descargar Excel completado».
6. Completa en Excel la investigación, las causas, medidas, participantes y firmas, que no se obtienen del reporte PDF. «Borrar sesión» descarta los archivos cargados y restablece la configuración.

## Plantilla y formatos

- La plantilla incluida deriva del XLS de referencia. Se eliminaron los datos de casos anteriores, firmas, imágenes, comentarios, enlaces, controles ActiveX, autores, empresas y propiedades personalizadas. No se incluye la huella digital del archivo original. Se conservan las tres hojas, sus títulos, bordes, combinaciones y estructura. Las casillas se rellenan con `X` en celdas editables. Se ajustaron dos filas para permitir textos largos y el área de impresión. Las referencias de marca y el código interno del formato se sustituyeron por textos genéricos.
- Para usar un archivo `.xls`, conviértelo antes a Libro de Excel (`.xlsx`) y retira los controles ActiveX. También puedes usar directamente la plantilla limpia incluida.
- Los XLSX propios conservan sus celdas no mapeadas. Usa siempre una plantilla vacía y comprueba la hoja y las direcciones. El programa no puede saber cuáles textos ajenos al mapeo son datos antiguos o etiquetas.
- La salida es `.xlsx`, editable en Excel. No se incluyen PDF reales ni información de trabajadores en la aplicación.
- El campo «Fecha de recepción» no se copia a la fecha de diligenciamiento de la investigación: son fechas diferentes. El número de reporte se presenta como consulta, sin inventar una casilla nueva.

## Editar el mapeo

Abre **Mapeo** para modificar celdas de destino y la hoja de Excel. Cada opción de las listas de casillas tiene su propia celda y zona en el PDF. Para modificar la lectura, pulsa «Elegir zona» o «Zona de marca» y arrastra un rectángulo alrededor del valor o de la X, sin incluir la etiqueta. Pulsa «Usar esta zona» y luego «Aplicar y volver a leer PDF».

Puedes agregar campos de texto y modificar detalles adicionales (etiqueta, tipo de dato, destinos en varias hojas, obligatoriedad) en el JSON exportado. El mapeo descargado contiene reglas y coordenadas, **no los valores extraídos**. Para reutilizar un ajuste, descarga ese JSON e impórtalo en la próxima sesión. La app no lo guarda automáticamente.

El mapeo inicial se validó con el diseño de PDF suministrado. Otros diseños requieren ajustar las zonas. Los PDF escaneados no tienen soporte OCR. Los archivos protegidos con contraseña requieren una copia sin contraseña. Límite: 15 MB por archivo, 20 páginas por PDF.

## Privacidad

Los documentos se leen con las API locales de archivos del navegador y se procesan en memoria. El HTML contiene las dependencias y la plantilla vacía. No contiene analítica, conexiones a IA, formularios remotos ni llamadas a un servidor para procesar documentos. No utiliza cookies, localStorage, sessionStorage, IndexedDB ni service workers.

La política CSP bloquea conexiones de la app (`connect-src 'none'`). En GitHub Pages el navegador solicita el HTML para abrir la página; la selección de archivos, revisión y exportación ocurren localmente. La exportación elimina las propiedades del documento (autor, empresa, fechas de edición y propiedades personalizadas) y usa un nombre de archivo genérico. Los archivos que descargues sí permanecen en tu carpeta de descargas. Las extensiones, copias de seguridad y mecanismos del navegador o del sistema operativo quedan fuera del control de esta miniapp.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub. Para el uso habitual de Pages sin plan de pago, usa un repositorio público. **El repositorio contendrá solo esta aplicación y la plantilla vacía. No agregues documentos de accidentes reales.**
2. Sube el contenido de esta carpeta a la raíz del repositorio, incluido `index.html` y `.nojekyll`.
3. En **Settings → Pages → Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main` y la carpeta `/ (root)`. Guarda y espera el enlace que muestra GitHub.

No necesitas instalar Node, ejecutar un proceso de compilación ni configurar claves para publicar el HTML ya generado. También puedes publicar únicamente `index.html`, `.nojekyll` y `THIRD-PARTY-LICENSES.txt`.

Documentación: [Crear un sitio en GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Desarrollo

Usa Node 22.13+ o 24 y ejecuta:

```sh
npm install
npm test
npm run build
```

`build.mjs` incorpora PDF.js, su worker, JSZip, el mapeo y la plantilla en un único HTML. `PDF_EXCEL_DEPS` permite indicar un directorio de dependencias existente. No contiene rutas personales ni requiere los documentos de referencia.

- `extract.mjs`: lectura por coordenadas, marcas, fechas y validación de mapeos.
- `workbook.mjs`: edición del contenido XML del XLSX, manteniendo estilos, celdas combinadas y hojas.
- `profile.mjs`: mapeo inicial editable.
- `app.mjs`: flujo de carga, revisión, mapeo y exportación.
- `plantilla-limpia.xlsx`: formato sin información personal.
- `extract.test.mjs` y `mapping.test.mjs`: siete pruebas con datos sintéticos y selección de hojas.

## Verificación realizada

Se probó carga y exportación desde el navegador con el PDF suministrado y se abrió el resultado en Microsoft Excel. Se comprobaron fechas, salario, identificadores, descripción y casillas frente al PDF. Se verificó un segundo PDF sintético con otros valores y campos vacíos para comprobar el reemplazo de datos. Se revisó que la plantilla incluida no conserve firmas, objetos incrustados ni los valores personales del ejemplo.

Las bibliotecas de terceros mantienen sus licencias en `THIRD-PARTY-LICENSES.txt`.
