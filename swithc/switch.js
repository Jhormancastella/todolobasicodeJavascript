//ejemplo1//
var color = prompt("ingrese un color ");

switch(color){

    case "rojo":
    console.log("es rojo");
    break;

    case "azul":
    console.log("es azul");
    break;

    case "amarillo":
    console.log("es amarillo");
    break;

    default:
    console.log("el color ingresado no es valido");
    break;
}

//ejemplo2// 

var DiasDeLaSemana = prompt("ingrese el dia de la semana")

switch(DiasDeLaSemana ){

    case "lunes":
        console.log("lunes");
        break;

    case "martes":
        console.log("martes");
       break;

    case "miercoles":
        console.log("miercoles");
        break;

    case "juevez":
        console.log("juevez");
        break;
    
    case "viernes":
        console.log("viernes");
        break;
    
    case "sabado":
        console.log("sabado");
        break;

    case "domingo":
        console.log("domingo");
       break;
        

    default:
        console.log("el dia que ingresaste no existe");
        break;
}