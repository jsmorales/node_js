
//este script utiliza la clase creada en el archivo event_emitter.js
var Reloj = require("./event_emitter.js");

var segundos = 0;

var relojito = new Reloj();

//listeners-------------------------------

relojito.on('tick-tock', function() {
	segundos += 1;
	console.log(segundos)
	if (segundos == 5) {
		// se detiene el proceso con el objeto process
		process.exit();
	}
});

//solo pasa la primera vez que se emite este 
//evento
relojito.once('tick-tock', function(){
	console.log("Primer segundo!")
})
