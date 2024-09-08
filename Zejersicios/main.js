
//ejercio1//

//para convertir un string en un entero usamos en parseInt que no ayuda en esa conversion.//


var pregunta1 = parseInt(window.prompt("ingrese el primer numero"));
var pregunta2 = parseInt(window.prompt("ingrese el segundo numero"));

//determinar el mayor

if(pregunta1>pregunta2){
alert ("el valor mayor es "+ pregunta1);
}else{
    alert("el valor mayor es "+ pregunta2);
}

//ejercicio 2

var fechaIngreso = window.prompt("ingrese una fecha ","mm/dd/yyyy");

var fecha = new Date (fechaIngreso);

var dia = fecha.getDay();

var diaSemana;

switch (dia) {
    case 0:
        diaSemana ="Domingo"
        break;
    case 1:
        diaSemana ="lunes";
        break
    case 2:
        diaSemana ="martes";
        break
    case 3:
        diaSemana ="miercoles";
        break
    case 4:
        diaSemana ="juevez";
        break
    case 5:
        diaSemana ="viernes"
        break
    case 6:
        diaSemana ="sabado"
        break
    default:
        break;
}
alert("el dia de la se mana de esa fecha es : " + diaSemana);
