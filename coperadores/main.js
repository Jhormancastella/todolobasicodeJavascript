/*//tenemos los sigientes operadores 

//operadores aritmeticos que son
Suma+
resta-
multiplicacion*
division/
modulo%
incremento++
decremento--
//operadores comparacion o relaciones

igualdad==
desigual(distinto)!=
igualdadesricta ===
desigual !==
mayor y menor <,>
mayorigual menorigual >=,<=

//operadores condiciones o logicos

AND &&:se utiliza cuando se debe cumplir ambas condiciones

OR ||: se utiliza cuando se debe cumplir una condicion o otra 

not !: se utiliza para negar el valor de una condicon si (si es true para ser flase y viceversa)

*/

var suma = 5 + 5; 
//prompt("la suma es: "+ suma) //pide un dato
//alert("la suma es: "+ suma)//muestra el dato
console.log("la suma es: "+ suma)//muestra en consola el dato

var resta = 5 - 3; 
console.log("la resta es: "+ resta)

var multiplicacion = 5 * 5; 
console.log("la multiplicacion es: "+ multiplicacion)

var division = 5 / 5; 
console.log("la division es: "+ division)

var resto = 33%2;
console.log("el resto es de: "+ resto)

//operadores relacionales//

console.log(5>2);
console.log(5<2);
console.log(4==4);

//operadores Logicos//

var edad = 15;
var cc =  true;
var cc1 = !true;

//ejemplo de uso AND//
console.log(edad>=18 && cc==true);//se deben cumplir las dos 
//ejemplo de uso OR// 
console.log(edad >=18 || cc==true);//se debe cumplir una de las dos
//ejemplo de uso de NOT//
console.log(cc1)//solo muestra que se esta negando