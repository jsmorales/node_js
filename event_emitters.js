//para poder tener varios callbacks en una funcion
//se hace por eventos que al escucharse se ejecuta
//otra funcion.

//se llama el modulo que contiene las funciones
var events = require("events")

//se asigna una variable al objeto que tiene la
//funcion a instanciar
var EventEmitter = events.EventEmitter;

var ee = new EventEmitter();


//este listener solo se ejecuta la primera vez que se ejecute
//el evento con ese nombre y no lo vuelve a hacer.+

ee.once("cansado",function(nombre,arma){
	console.log(nombre)
	console.log(arma)
	console.log('El jugador esta cansado por primera vez.')
})

//este es el que escucha el evento y se ejecuta cada vez que
//se emite tal evento
//este puede tambien recibir informacion del evento emitido.

ee.on("cansado",function(nombre,arma){
	console.log(nombre)
	console.log(arma)
	console.log('El jugador esta cansado.')
})


ee.on("herido",function(nombre,arma){
	console.log(nombre)
	console.log(arma)
	console.log('El jugador esta herido.')
})


//este es el emisor del evento, lleva el nombre del evento
//y la informacion que envie como data al listener.
ee.emit("cansado","Link","Espada")
//segunda vez
ee.emit("cansado","Link","Espada")

//tambien se pueden anular los escuchadores de la siguiente forma
ee.removeAllListeners("cansado");

//para remover todos los listeners solo se escribe:
//ee.removeAllListeners();
//para que no se escuche nada mas por el momento.

//tercera vez
ee.emit("cansado","Link","Espada")

ee.emit("herido","Link","Espada")
