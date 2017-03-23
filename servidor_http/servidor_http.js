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
	
	//Se muestra cual es el metodo y la url
	console.log(llamado.method+" -> "+llamado.url)
	//console.log(llamado.rawHeaders)
	
	//Crea el path de llamado con readfile
	var path = llamado.url == "/" ? "/index.html" : llamado.url;
	var path1 = path.replace("/", "./");
	
	
		/*//El server debe clasificar que tipos de archivo puede servir
		//y que hacer con cada uno de esos archivos segun su extensión*/
		
		if ( (llamado.url.match(/.html$/)) || (llamado.url == "/") ) {

			fs.readFile(path1, 'utf-8', function(error, contenido){
										
				if (error) {
					respuesta.writeHead(404, {"Content-Type" : "text/html"});
					respuesta.end("<h1>404!</h1> Esta pagina no existe.");
				}else{
					respuesta.writeHead(200, {"Content-Type" : "text/html"});
					respuesta.end(contenido);
				}
											
			})

		}else if(llamado.url.match(/.css$/)){

			fs.readFile(path1, 'utf-8', function(error, contenido){
				respuesta.writeHead(200, {"Content-Type" : "text/css"});
				respuesta.end(contenido);
			})

		}else if(llamado.url.match(/.jpg$/)){
			
			fs.readFile(path1, function(error, contenido){
				respuesta.writeHead(200, {"Content-Type" : "image/jpg"});
				respuesta.end(contenido);
			})
		}

})

//luego de crear el server se pone a que escuche con los parametros
//creados anteriormente
servidor.listen(puerto, host,function(){
	//este callback hace que el servidor creado escuche peticiones
	//y genere los resultados.
	console.log('El server esta corriendo en: '+host+' : '+puerto)
})
//Matar proceso en arch --> killall -9 node