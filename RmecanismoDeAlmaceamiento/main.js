//setitem // Crear
//getitem // Read
//setitem // Update
//removeitem // Delete

//session Store//la informacion solo permace en la secion//

//indexedDB//Data Base
// Base de Datos
//es un tipo de almacenamiento que nos permiete almarcenar bloques de infromacion en formatos de bites 
// son de naturaleza asincronica //puede almacenar objestos
// su capacidad de almacenar es de asignada por el navegador //

//cookies // son preferencias, contraseñas,

//localStorega //el que estaremos trabajando//solo admite strings(json).

//ejemplo breve de uso del local storage//

gaurda_locaStorage();

function gaurda_locaStorage(){
    let persona1 ={
        nombre:"jhorman",
        edad: 31,
        correo:"jesus@gmail.com",
        coords:{
            lat:10,
            lng:-10
        }
    };
    let nombre ="OSMAN";

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify( persona1));
} 


/// ejemplo en clase



//funciones//

let Mikey = "juan"//es un string
let Mvalue ={nombre:"jesus",edad:17};//Json.srringify(Mvalue) -> '[{"nombre:","jesus","edad: ","18"}]'
let MiValue2 ={gatos:3,perro:1,pollos:2}


function CrearStoreItem(key,value){
    if (typeof(key)!="string"){//revisa que se texto
        console.error("las key solo pueden ser texto");
        
        return;//se sale y no continua
    }

    const valorJson = JSON.stringify(value);
    localStorage.setItem(key,valorJson);
    console.log(localStorage);

    //let variable =localStorage.setItem(key,value);//esto daria error//
    //return variable;//no funcionaria//
}

function UpdateStorageItem(key,value){
    //revisar que la key sea texto
    if (typeof(key) != "string"){
        console.error("lo siento las llaves solo pyueden se texto");
        return;
    }
    const resultado =localStorage.getItem(key);
    if (resultado == null) {
        console.error("no existe esa entrada");
        return;
    }
}


CrearStoregeItem(Mikey,Mvalue);
CrearStoregeItem(Mikey,MiValue2);

function verStorage(){
    console.log(localStorage);
}

function deleteAllStorage(){
    localStorage.clear();
}

