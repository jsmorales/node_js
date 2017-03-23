//se leen archivos de forma parcial para tener la posibilidad
//de ir ejecutando metodos en el proceso, se trabaja para archivos 
//muy grandes.
var fs = require("fs");

//se crea una variable del total
var total = "";

//se lee el archivo de forma stream
var stream = fs.createReadStream("grande_test.txt");

//stream genera varios eventos

//data genera los segmentos del archivo
//en este caso se va a mostrar de que 
//tamaño son los segmentos

stream.on('data', function(segmento) {
	//---------------------------
		console.log(segmento.length)
		//se le suma al total el segmento generado
		total += segmento; 
	//---------------------------
	//para pausar el stream se escribe stream.pause()
	//para continuar stream.resume()
});

stream.on('end', function(){
	console.log('El tamaño total es: '+total.length)
});
