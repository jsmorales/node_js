//se crea un modulo al que se le permita oir y emitir eventos.

//esta variable es la clase en si de event emitter
var events = require("events").EventEmitter;

//permite heredar la funcionalidad de una clase
var util = require("util");

//la clase que hereda todo es:

var Reloj = function(){
	//esta clase emite un evento cada segundo

	//se crea una referencia a este objeto
	var self = this;

	//----------------------------------------
	setInterval(function(){
		//emite un evento llamado asi
		self.emit("tick-tock");
	},1000)
	//----------------------------------------
}

//ahora se dice que reloj debe heredar de eventemitter
//se hace con la funcion inherits de la clase util
//se le pasa el nombre de la clase a asignar 
//y se le pasa la clase asignada.

util.inherits(Reloj,EventEmitter);

//por ultimo solo exporta la clase reloj

module.exports = Reloj,