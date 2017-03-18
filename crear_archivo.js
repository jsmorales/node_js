//para el manejo de archivos se utiliza el modulo fs
var fs = require('fs');

var texto = "<?php echo 'Aprendiendo Node.js'; ?>";

//el metodo para escribir es writeFile, es asincronico(ocurre sin parar el proceso) y tiene los parametros:
/*
-nombre del archivo
-el contenido del archivo
-funcion callback
*/
fs.writeFile("saludo.php",texto,function(error){
	if (error) {
		throw error;
	}else{
		console.log("El archivo fue creado.")
	}
})

console.log("Mensaje para probar que si es asincronico...")