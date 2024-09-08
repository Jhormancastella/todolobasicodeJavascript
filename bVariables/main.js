//en java script existen tres tipos de variables 

/*cada una de estas se usan en diferentes situaciones
1- var   // se utiliza para indicar a javascript que se de calara una variable sin importar el tipo de dato.
ejemplo de -- var NombreYapellido; --
2- let   // se utiliza para indicar a javascript que se de clara una variable pero que solo puede usar dentro de un determinado bloque de codigo
ejemplo de -- let NombreYapellido;
3- const // se utiliza para indicar a javascript que se de clara una variable pero que solo puede usar dentro de un determinado bloque de codigo pero adicional es una constante quiere decir que caundo se le asigne un valor no podra cambiar el mismo ya que es una constante.
ejemplo de -- const NombreYapellido(jesus);
*/

//tenemos los tippos de datos los cuales son 

/*
1- los nunericos (number,bigint).
2-los strig (son alfanumericos)
3-los booleanos(que permitebndo dos valores (true,false))
4-los null (contienen valor null (nulo))
5-los undifined (que contienes valorees no degfinidos)
*/

/* operador de asignacion ques es (=) */

// pruebas con **Var** //

var nombre = "jesus";
var edad = 28;
var presenteOno = true;
var apellido ="morales";
var statura = 1.68;
//para verlo en consola uso el console.log(puedo tambien ver que tipo de dato es usando concatesancion y la plabra reservada (typeof))//
console.log("nomnbre: "+nombre + " " + typeof nombre);
console.log("edad: "+edad);
console.log("pesente: "+presenteOno);
console.log("apellido: "+apellido);
console.log("estatura: "+statura);

// pruebas con **let** //

if (true){
   let nombre2 = "jhorman";
}
//si quiero accerder a nombre2 estando fuera del bloque no me lo permite ya que no es una variable //
//console.log("nombre: "+ nombre2);

// pruebas con **const** //

const email ="jesusjhorman@gmail.com";
// si lo quiero modificar no lo permitira //
//ejemplo de error -- email ="megamax1243gmail.com";

console.log("email: "+ email)






//alert("hola mundo " +nombre +edad)
