//-----------------------------------------------
var fs = require("fs")
//-----------------------------------------------
var archivos = fs.readdirSync("reto");
//console.log(archivos)

for (var i = 0; i < archivos.length; i++) {
	//console.log(i)	
	console.log(archivos[i])
	console.log(archivos[i].indexOf("."))
	var str_p = archivos[i].indexOf(".") - 1;
	console.log(str_p)
	console.log(archivos[i][str_p])
}
//-----------------------------------------------
