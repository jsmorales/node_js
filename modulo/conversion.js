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