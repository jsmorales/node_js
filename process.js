//process nos ayuda a pasarle argumentos a los scripts
//gracias a la variable argv

//console.log(process.argv[2])

function readArg(opt){
	var index = process.argv.indexOf(opt)

	if(opt === -1){
		return false;
	}else{
		return process.argv[index + 1];
	}
}

var name = readArg("-name")
var apellido = readArg("-apll")

console.log("El nombre es: "+name)

//para mostrar en pantalla tambien podemos utilizar process.stdout.write()
process.stdout.write("El apellido es: "+apellido+" \n")

console.log("Por favor ingrese su otro apellido: ");
//para lograr una entrada por teclado se debe hacer lo siguiente:
process.stdin.on('data', function(data){
	//el callback devuelve data como lo que se ingrso por consola
	process.stdout.write("El termino ingresado fue: "+data)
	//para terminar el proceso se hace con:
	process.exit()
})
