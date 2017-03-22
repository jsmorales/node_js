
var log = (function(){
	
	this.objt = {
		nombre:"Johan Morales",
		numero:25,
		file_name:function(){
			console.log(__filename)
		},
		dirname:function(){
			console.log(__dirname)
		}
	}

})();

objt.file_name()
objt.dirname()
console.log(objt.nombre)
