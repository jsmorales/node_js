//se estudia como se lee un archivo con node js
var fs = require('fs');
//path del archivo
fs.readFile("conf_ejemplo.json", "UTF-8", function(error, contenido){
	if (error) {
		//detiene la ejecucion
		throw error;
	} else {
		console.log("Contenido: "+contenido)
	}
})