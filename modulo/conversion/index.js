//modulo de conversion de medidas
//se exportan las funciones con exports.
exports.pulgadasaMetros = function(pulgadas){
	return pulgadas * 0.0254;
}


exports.millasaMetros = function(millas){
	return millas * 1609.34;
}

exports.yardasaMetros = function(yardas){
	return yardas * 0.9144;
}

exports.piesaMetros = function(pies){
	return pies * 0.3048;
}

//para empaquetar esto se entra al directorio
//se escribe el comando [npm pack], esto pasa todo a un .tgz
//se sale del directorio y se ejecuta el comando para instalar en este caso:
//[npm install conversion/conversion-0.0.1.tgz] que es el directorio donde esta
//el .tgz