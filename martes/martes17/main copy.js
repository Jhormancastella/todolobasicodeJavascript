import botonEnviar from "./componentes/botonEnviar.js";
Import contenedorTareas from "./componentes/contenedorTareas.js";
import titulo from "./componentes/titulo.js";
import tareaInput from "./componentes/tareaInput.js";
import root from "./componentes/root.js"
const root document.getElementById("root");
root.append(titulo);
root.append(tareaInput);
root.append(botonEnviar);
root.append(contenedorTareas);
root.append(eliminarTarea

// //lista de tareas por realizar taller parte de la nota final
// import botonEnviar from "./boton.js";
// import contenedorTareas form "./"

// const root = document.getElementById("root");


// //crear el titulo
// const titulo = document.createElement("h1");
// titulo.textContent ="TODO LIST";
// //llamar el titulo

// root.append(titulo)
// //crear el input de ingreso de datos 
// const tareaInput = document.createElement("input");
// tareaInput.placeholder ="ingrese su nombre";

// root.append(tareaInput);
// //boton

// root.append(botonEnviar);

// //Crear los elementos

// const div = document.createElement('div');
// const pTarea = document.createElement('p');
// const bEliminarTarea = document.createElement('button');

// // Configurar los elementos
// pTarea.textContent = 'Nueva Tarea';
// bEliminarTarea.textContent = 'Eliminar';

// // Añadir funcionalidad al botón
// bEliminarTarea.addEventListener('click', () => {
//     div.remove(); // Eliminar el div que contiene la tarea
// });

// // Añadir los elementos al div
// div.appendChild(pTarea);
// div.appendChild(bEliminarTarea);

// // Añadir el div al root del documento
// root.appendChild(div);