var fs = require("fs")

var nuevo_texto  = "<?php echo 'Se estaañadiendo codigo a esta vaina.'; ?>";

//path del archivo
//contenido
//callback
fs.appendFile("saludo.php", nuevo_texto, function(error){
	if (error) {
		throw error;
	} else {
		console.log("El nuevo texto ha sido añadido al archivo.")
	}
})