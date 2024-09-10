//llave primaria //
const miObj = {
    id: 23,//llave primaria debe ser unica y debe ser texto o numero puede tambien ser auto incremental//
    name:"juan",
    skills: ["java","javascrip","rust"],
    present: function(){
        console.log(`hola,me llamo ${this.name} y program en ${this.skills.map(item => item)}`);
    }
}

function createItem(object) {
    if (!object.id) {
    console.error("Tu objeto no tiene id");
    return false;
    }
    object = JSON.stringify(object);
    localHost.setItem(object.id, object);
    }
    function getObjectById(id) {
    if (typeof(id) != "number") {
         console.error("id no valido");
    return false;
    }
    const response = localHost.getItem(id);
    return JSON.parse(response);
}

//grud

function updateItem(obj) {
    if (!localStorage.getItem(obj.id)) {
         console.error("Tu objeto no existe");
    return false;
    }
    createItem(obj);
}
    function deleteItem(id) {
    if (typeof(id) != "number") { 
        console.error("id no valido");
    return false;
    }
    if (!localStorage.getItem(id)) { 
        console.error("Tu objeto no existe"); 
        return false;
    }
    localStorage.removeItem(id);    
}

//ver el estorage//
function verStorage() {
    let lista =^[];

for (let index = 0; index < localStorage.length; ++i) {
    const key = localStorage.key(index);
    const value = localStorage.getItem(key);
    console.log (localStorage.getItem(key));
    console.log(value);
    lista.push({key : value});
    }
    lista.forEach(item =>console.log(lista))
    return lista;
    
}
function deleteAllStorage(){
    localStorage.clear();
}


//funcion mostar en pantalla//

function obtener_localStorage(){
    let nombre = localStorage.getItem("nombre","gaurda_locaStorage");
    console.log(nombre,gaurda_locaStorage);

}
