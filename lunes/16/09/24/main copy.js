// //root
// const root = document.getElementById("root");

// //titulo
// const titulo = document.createElement("h1");
// titulo.innerHTML = "hola campus"; 
// titulo.id = "mititulo";  // Redundante: setAttribute no es necesario

// //formulario
// const miForm = document.createElement("form");
// miForm.id = "miForm";

// const nameInput = crearInput("nombre", "text", "ingrese el nombre");
// const apellidoInput = crearInput("apellido", "text", "ingrese el apellido");

// const botonEnviar = document.createElement("button");
// botonEnviar.innerHTML = "eliminar";

// //agrega en el html para visualisar
// root.appendChild(titulo);
// root.appendChild(miForm);

// miForm.appendChild(nameInput);
// miForm.appendChild(apellidoInput);
// miForm.appendChild(botonEnviar);

// // Evento para el formulario
// miForm.addEventListener("submit", mostarInfo);

// function crearInput(name, type, placeholder, min, max) {
//     const miInput = document.createElement("input");
//     miInput.id = name;
//     miInput.name = name;
//     miInput.type = type;
//     miInput.placeholder = placeholder;
//     if (min) miInput.setAttribute("min", min);
//     if (max) miInput.setAttribute("max", max);
//     return miInput;
// }

// function mostarInfo(event) {
//     event.preventDefault();
//     root.removeChild(miForm);
//     root.removeChild(titulo);
// }

// // Elimina el título después de 5 segundos
// setTimeout(() => {
//     root.removeChild(titulo);
// });
// ////////////////////////////////////////////////////////
// function myFunction() {
//     const list = document.getElementById("myList");
//     while (list.hasChildNodes()) {
//       list.removeChild(list.firstChild);
//     }
//   }
//   ////

//   function  crearTarea(){
//     const miTarea = document.createAttribute("p");
//     newTaskInput.value ="";
//     const miBoton  = document.createElement("button")
//     miBoton.innerText ="remove";
    

//     miBoton.addEventListener("click",()=>{
//         miTarea.remove();
//         miBoton.remove();

//     });
//     divTareas.append(miTarea,miBoton);
//   }

// //root
// const root = document.getElementById("root");

// //titulo
// const titulo = document.createElement("h1");
// titulo.innerHTML = "hola campus"; 
// titulo.id = "mititulo";

// //formulario
// const miForm = document.createElement("form");
// miForm.id = "miForm";

// const nameInput = crearInput("nombre", "text", "ingrese el nombre");
// const apellidoInput = crearInput("apellido", "text", "ingrese el apellido");

// // Cambiar el texto del botón a "Agregar Elemento"
// const botonAgregar = document.createElement("button");
// botonAgregar.innerHTML = "Agregar Elemento";

// // Agrega el título y el formulario al DOM
// root.appendChild(titulo);
// root.appendChild(miForm);

// miForm.appendChild(nameInput);
// miForm.appendChild(apellidoInput);
// miForm.appendChild(botonAgregar);

// // Evento para el botón
// botonAgregar.addEventListener("click", agregarElemento);

// // Función para crear inputs
// function crearInput(name, type, placeholder, min, max) {
//     const miInput = document.createElement("input");
//     miInput.id = name;
//     miInput.name = name;
//     miInput.type = type;
//     miInput.placeholder = placeholder;
//     if (min) miInput.setAttribute("min", min);
//     if (max) miInput.setAttribute("max", max);
//     return miInput;
// }

// // Función para agregar un nuevo elemento
// function agregarElemento(event) {
//     // Evita el comportamiento predeterminado del botón
//     event.preventDefault();
    
//     // Crear un nuevo elemento (puede ser un párrafo o cualquier otro elemento)
//     const nuevoElemento = document.createElement("p");
//     nuevoElemento.innerHTML = `Nuevo elemento agregado en ${new Date().toLocaleTimeString()}`;
    
//     // Añadir el nuevo elemento al contenedor root
//     root.appendChild(nuevoElemento);
// }

// // Eliminar el título después de 5 segundos
// setTimeout(() => {
//     root.removeChild(titulo);
// }, 5000);
//root
const root = document.getElementById("root");

//titulo
const titulo = document.createElement("h1");
titulo.innerHTML = "hola campus"; 
titulo.id = "mititulo";

//formulario
const miForm = document.createElement("form");
miForm.id = "miForm";

const nameInput = crearInput("nombre", "text", "ingrese el nombre");
const apellidoInput = crearInput("apellido", "text", "ingrese el apellido");

// Cambiar el texto del botón a "Agregar Elemento"
const botonAgregar = document.createElement("button");
botonAgregar.innerHTML = "Agregar Elemento";

// Agrega el título y el formulario al DOM
root.appendChild(titulo);
root.appendChild(miForm);

miForm.appendChild(nameInput);
miForm.appendChild(apellidoInput);
miForm.appendChild(botonAgregar);

// Evento para el botón
botonAgregar.addEventListener("click", agregarElemento);

// Función para crear inputs
function crearInput(name, type, placeholder, min, max) {
    const miInput = document.createElement("input");
    miInput.id = name;
    miInput.name = name;
    miInput.type = type;
    miInput.placeholder = placeholder;
    if (min) miInput.setAttribute("min", min);
    if (max) miInput.setAttribute("max", max);
    return miInput;
}

// Función para agregar un nuevo elemento
function agregarElemento(event) {
    // Evita el comportamiento predeterminado del botón
    event.preventDefault();
    
    // Crear un nuevo contenedor para el elemento y el botón de eliminación
    const contenedorElemento = document.createElement("div");
    contenedorElemento.style.display = "flex";
    contenedorElemento.style.alignItems = "center";
    contenedorElemento.style.marginBottom = "10px";
    
    // Crear el nuevo elemento
    const nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = `Nuevo elemento agregado en ${new Date().toLocaleTimeString()}`;
    nuevoElemento.style.margin = "0";
    
    // Crear el botón de eliminación
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.style.marginLeft = "10px";
    
    // Asignar un evento al botón de eliminación
    botonEliminar.addEventListener("click", function() {
        root.removeChild(contenedorElemento);
    });
    
    // Añadir el elemento y el botón de eliminación al contenedor
    contenedorElemento.appendChild(nuevoElemento);
    contenedorElemento.appendChild(botonEliminar);
    
    // Añadir el contenedor al root
    root.appendChild(contenedorElemento);
}

// Eliminar el título después de 5 segundos
setTimeout(() => {
    root.replaceChild(miInput,nameInput);
}, 5000);

