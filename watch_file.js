//node puede verificar si se ha cambiado algo dentro
//de algún archivo.
var fs = require("fs");
//se carga el archivo en una variable como json
//este se lee de forma sincrónica, este se lee con fs.readFileSync
//los parámetros son el path del archivo y la codificacion

function readArchivo(){
	var archivo = JSON.parse(fs.readFileSync("conf_ejemplo.json","UTF-8"));
	//luego solo se muestra el archivo en consola
	console.log(archivo)	
}
readArchivo()
//luego se revisa si han habido cambios en el archivo
//esto se revisa con fs.watchFile, los parametros son 
//el path del archivo y un callback con 2 parametros
//actual y aterior
fs.watchFile("conf_ejemplo.json", function(actual, anterior){
	//en caso de que cambie el archivo si se va a ejecutar el callback
	//de lo contrario no va a pasar nada
	console.log("El archivo ha cambiado.")
	readArchivo()
})