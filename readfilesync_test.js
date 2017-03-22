//para leer archivos sincronicamente, esto quiere decir
//ejecutar metodos hasta que el archivo se halla leido
//o cargado por completo como un archivo de configuracion

var fs = require('fs')

//para leer el achivo se le pasa el path y la codificacion
var archivo = fs.readFileSync('modulo/conversion/package.json', 'UTF-8')

console.log(archivo)

//lee el archivo como una cadena de texto
//para pasarlo a un objeto se puede parsear JSON
var config = JSON.parse(archivo);

console.log(config.name)
console.log(config.version)