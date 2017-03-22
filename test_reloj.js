var clock = require("./hereda_event.js")

var segundos = 0;

//se instancia la clase Reloj

var reloj = new Reloj();

//listeners 

reloj.on("tick-tock",function(){

	segundos += 1;

	console.log(segundos)
})

