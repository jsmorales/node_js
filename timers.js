//los metodos que permiten crear intervalos de tiempo son
/*
--sirven para ejecutar funciones--
setTimeout
setInterval

--sirven para cancelar las 2 primeras--
clearTimeout
clearInterval
*/

//----setTimeout----
//este solo se ejecuta una sola vez
var stm = setTimeout(function(){
  console.log("Corriendo...");
}, 5000)
//se cancela el timer
clearTimeout(stm)

//----setInterval----
//Se ejecuta cada tanto tiempo segun se halla definido, hasta que lo detengamos.
var val = 0;
var setI = setInterval(function(){
  val += 1;
  console.log(val);
  //elimina el procedimiento si el valor es 5
  if(val === 5)
    clearInterval(setI);

}, 1000)