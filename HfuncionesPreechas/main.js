//uso de promt para respuesta y alertar para ver la respuesta //

var respuesta = window.prompt("estas aprendiendo","si es muy bueno");
alert ("su respuesta fue "+ respuesta);

//ventanas de confirmacion//

var confirmacion = window.confirm("te gustan los curos");

if(confirmacion == true){
    alert("muchas graciuas por la confirmacion")
}
else{
    alert("en que podemos mejorar")
}