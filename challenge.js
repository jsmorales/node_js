//-----------------------------------------------
var gestiona_archivos = require("./gestiona_archivos.js")
//-----------------------------------------------
var carpeta_inicial = "reto";
var archivos = gestiona_archivos.getListaArchivos(carpeta_inicial);
//-----------------------------------------------

//-----------------------------------------------
//Bucle que recorre el array de archivos

for (var i = 0; i < archivos.length; i++) {
	//console.log(i)	
	console.log(archivos[i])
	//console.log(archivos[i].indexOf("."))
	var str_p = archivos[i].indexOf(".") - 1;
	//console.log(str_p)

	var num_carpeta = archivos[i][str_p];

	console.log(num_carpeta)
	//--------------------------------------
	//función para crear carpetas
	//se crea carpeta segun el numero en que
	//termine el nombre del archivo
	//si ya existe no se debe crear nada
	var nom_carpeta = "carpeta_"+num_carpeta;

	//creaCarpeta(nom_carpeta)
	console.log(gestiona_archivos.validaCarpeta(nom_carpeta))
	
	if(!gestiona_archivos.validaCarpeta(nom_carpeta)){
		gestiona_archivos.creaCarpeta(nom_carpeta)		
	}

	//creaArchivo(nom_carpeta+"/"+archivos[i])
	gestiona_archivos.mueveArchivo(carpeta_inicial+"/"+archivos[i], nom_carpeta+"/"+archivos[i])
	//--------------------------------------
}

//elimina la carpeta de reto
gestiona_archivos.eliminaCarpeta(carpeta_inicial)
//-----------------------------------------------
