//unlink sirve para borrar archivos del sistema de archivos
//con node.js

//siempre se inicia llamando las dependencias en este caso fs
var fs = require('fs');

fs.unlink("test.json",function(error){
	if (error) {
		throw error;
	} else {
		console.log('El archivo fue borrado.')
	}
})