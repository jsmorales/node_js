//se crea la clase dentro de una variable
var EventEmitter = require("events").EventEmitter;
//para poder heredar la clase a otra se utiliza
var util = require("util");

//la funcion que se crea es una que emite un evento
//cada segundo.
var Reloj = function(){
	//se hace una referencia a si mismo
	var self = this;
	//se crea el intervalo
	setInterval(function(){
		self.emit("tick-tock");
	},1000)
}
//esto indica que reloj hereda de event emitter
util.inherits(Reloj,EventEmitter);
//por ultimo se exporta la clase que acabamos de crear
module.exports = Reloj;