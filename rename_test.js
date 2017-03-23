//se ve como renombrar y mover archivos o carpetas con node
var fs = require("fs");
//se pasan lo parametros el path y el path de renombre mas el callback

/*Para renombrar archivos
fs.rename("test1/renombara_test.json","test1/renombrado.json",function(error){
	if (error) {
		// statement
		throw error;
	} else {
		// statement
		console.log('Se cambió el nombre del archivo.')
	}
})*/

/*Para renombrar directorios
fs.rename("test3","test4",function(error){
	if (error) {
		// statement
		throw error;
	} else {
		// statement
		console.log('Se cambió el nombre del directorio.')
	}
})*/

/*Para mover archivos
fs.rename("test1/renombrado.json","test4/renombrado.json",function(error){
	if (error) {
		// statement
		throw error;
	} else {
		// statement
		console.log('Se movió el nombre el archivo.')
	}
})*/