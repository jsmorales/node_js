//en este script se ve como crear un server http

//se requiere una variable con la instacia de htto
var http = require("http")
var fs = require("fs")
//se necesita una variable con la ip del host
var host = "127.0.0.1"

//se necesita una variable con el puerto por el que
//escucha el host
var puerto = "9000"

//se crea el servidor en una variable
//createServer lleva un callback que retorna
//un llamado y una respuesta

var servidor = http.createServer(function(llamado, respuesta){
	//la respuesta contiene metodos para escribir el encabezado
	//de unapagina o para que cuando termine mostrar un resultado
	
	console.log(llamado.method+" -> "+llamado.url)
	
	var path = llamado.url == "/" ? "/index.html" : llamado.url;

	var path1 = path.replace("/", "./");
	
	fs.readFile(path1, 'utf-8', function(error, contenido){
		if (error) {
			respuesta.writeHead(404, {"Content-Type" : "text/html"});
			respuesta.end("<h1>404!</h1> Esta pagina no existe.");
		} else {
			respuesta.writeHead(200, {"Content-Type" : "text/html"});
			respuesta.end(contenido);
		}
	})
})

//luego de crear el server se pone a que escuche con los parametros
//creados anteriormente
servidor.listen(puerto, host,function(){
	//este callback hace que el servidor creado escuche peticiones
	//y genere los resultados.
	console.log('El server esta corriendo en: '+host+' : '+puerto)
})
//killall -9 node