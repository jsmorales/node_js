//como leer los contenidos de un directorio
var fs = require('fs')

//de forma sincronica---------------------

//listado de archivos del directorio

//path del directorio
//var archivos = fs.readdirSync("archivos");
//console.log(archivos)
//----------------------------------------

//de forma asincronica--------------------
fs.readdir("archivos",function(error, archivos){
	if (error) {
		throw error;
	} else {
		console.log(archivos)
	}
})
//esto aparece al inicio porque carga el callback solo
//cuando halla terminado de leer el directorio
console.log("Leyendo los archivos del directorio.")
//----------------------------------------