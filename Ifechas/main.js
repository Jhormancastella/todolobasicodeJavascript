//constructor/

var fecha = new Date(1995,10,30);

//funciones especiales //

var dia = fecha.getDate();//devuelve la fecha
var mes = fecha.getMonth();//devuelve el mes
var anio = fecha.getFullYear();//devuelve año

//otras funciones que podemos llamar//

//.getHours()//devuelve la hora
//.getMinutes()//devuelve los minutos
//.getSeconds()//devuelve los segundos


alert("Dia: " + dia +" mes: " + (mes+1) + " año: "+ anio);