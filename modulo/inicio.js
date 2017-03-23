//para instanciar el modulo conversion se necesita 
//hacer de la siguiente manera:

//esto se escribe para poder tener el modulo sin instalacion por NPM
//var conversion = require("./conversion")

//para modulos instalados se escribe asi
var conversion = require("conversion")

var pulgadas = 3;

console.log(pulgadas+" pulgadas son "+conversion.pulgadasaMetros(pulgadas)+" Metro(s)")