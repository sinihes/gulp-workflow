# gulp-workflow
 herramienta gulp para gestión de archivos.


 # Modo de instalación:
 Comprobar tener:
>node --version   => v8.11.1
>npm --version => 5.6.0
>npx --version => 9.7.1

# Después instalar gulp globalmente.
> npm install -g gulp-cli 
> npm gulp --version 
    result: CLI version: ?.?.?
    Local version: Unknown

----

# Una vez realizado estos pasos ya podemos comenzar la instalación de los paquetes de devDependencias.
>npm install

------


# COMO USAR EL WORKFLOW:
Las carpetas están formadas por acción a realizar y carpeta de recursos de desarrollo ( BabelJS/src ).
Sera en el directorio src donde colocaremos los archivos a ejecutar y una vez lanzado el comando se creara el directorio public.
## Y usarlo lanzaremos el comando:
> gulp +tarea

---------------
### Para archivos JS ( minifación , ofuscación del código y compatibilidad con navegadores.) 
Colocaremos los archivos .js y subdirectorios con archivos .js en BabelJS/src. Lanzar comando:
> gulp babel

-----------------
### Para archivos Html ( minifación y borrado de comentarios.) 
Colocaremos los archivos .html y subdirectorios con archivos .html en HtmlMin/src. Lanzar comando:
> gulp htmlmin

-------------------
### Para archivos CSS ( minifación , prefijo.) 
Colocaremos los archivos .css y subdirectorios con archivos .css en MinPrefixCss/src. Lanzar comando:
> gulp mincss

-------------------
### Para archivos CSS ( Purgado de CSS,  minifación , prefijo.) 
!!! OJO ¡¡¡ Para el purgado del css es necesario el html para que pueda realizar la comprobación.
Colocaremos los archivos .css y subdirectorios con archivos .css en PurgeCss/src/css. 
Colocaremos los archivos .html y subdirectorios con archivos .html en PurgeCss/src/html. 
> gulp purgecss