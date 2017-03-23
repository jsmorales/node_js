//este archivo lee el contenido de un directorio usando fs
var fs = require('fs');

//de forma sincronica seria:

//var archivos = fs.readdirSync("modulo")
//console.log(archivos)

//de forma asincronica va de la forma

fs.readdir("modulo/conversion",function(error,archivos){
	if (error) {
		throw error;
	} else {
		console.log(archivos)
	}
})

console.log('Leyendo los archivos.')