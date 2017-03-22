//se estudia como crear una carpeta y verificar si ya existe
var fs = require('fs')
//nombre del directorio, callback
//la funcion access verifica si ya existe la carpeta y da un error en 
//caso de que no exista.
fs.access("test_mkdir1", function(error){
	if (error) {
		//no existe la carpeta y la puede crear
		fs.mkdir("test_mkdir1", function(error){
			if (error) {
				throw error;
			} else {
				console.log("La carpeta fue creada.")
			}
		})
		//-------------------------------------
	} else {
		//ya existe la carpeta
		console.log("La carpeta ya existe.")
	}
})

