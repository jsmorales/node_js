process.stdout.write("Ingrese los numero para sumarlos, para parar ingrese punto(.)\n")


var sum = 0;

process.stdin.on('data', function(data){
	//el callback devuelve data como lo que se ingrso por consola
	process.stdout.write("El numero ingresado fue: "+data+"\n")
  //se pasa la data a cadena y se le quitan los espacios si hay
  if (data.toString().trim() === ".") {
    console.log("La suma es: "+sum);

    process.exit()
  }else{
    sum += parseInt(data)

    console.log("La suma va en: "+parseInt(sum));
  	//para terminar el proceso se hace con:
  }

})
//en este punto es en donde se ve el uso de los eventos
//el suceder el exit en process se ejecuta el callback
process.on('exit', function(args){
  console.log("Ha terminado de usar el programa.");
})