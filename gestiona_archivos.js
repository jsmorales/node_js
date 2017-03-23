//-----------------------------------------------
var fs = require("fs")

//-----------------------------------------------
exports.getListaArchivos = function(path){
	return fs.readdirSync(path);
}

exports.validaCarpeta = function (nom_carpeta){

	try{
		fs.accessSync(nom_carpeta)
		return true;
	}catch(e){
		return false;
	}

}

exports.creaCarpeta = function (nom_carpeta){

	try{
	    fs.mkdirSync(nom_carpeta)
	    console.log("Se creo la carpeta.")
	  }catch(e){
	    console.log("No se creo la carpeta.")
	  }	
}

exports.mueveArchivo = function (oldPath, newPath){
	try{
		fs.renameSync(oldPath, newPath)
		console.log("Se movió el archivo.")
	}catch(e){
		console.log(e)
	}
}

exports.eliminaCarpeta = function (path){

	try {
		fs.rmdirSync(path)
		console.log("Se quito la carpeta inicial.")
	} catch(e) {		
		console.log(e);
	}
}