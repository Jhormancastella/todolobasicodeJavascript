//root
const root = document.getElementById("root");

//titulo
const titulo = document.createElement("h1");
titulo.innerHTML = "hola campus"; 
titulo.id = "mititulo";  // Redundante: setAttribute no es necesario

//formulario
const miForm = document.createElement("form");
miForm.id = "miForm";

const nameInput = crearInput("nombre", "text", "ingrese el nombre");
const apellidoInput = crearInput("apellido", "text", "ingrese el apellido");

const botonEnviar = document.createElement("button");
botonEnviar.innerHTML = "enviar";

//agrega en el html para visualisar
root.appendChild(titulo);
root.appendChild(miForm);

miForm.appendChild(nameInput);
miForm.appendChild(apellidoInput);
miForm.appendChild(botonEnviar);

// Evento para el formulario
miForm.addEventListener("submit", mostarInfo);

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

function mostarInfo(event) {
    event.preventDefault();
    const formData = new FormData(miForm);
    const formNombre = formData.get("nombre");
    const formApellido = formData.get("apellido");
    alert(`bienvenido ${formNombre} ${formApellido}`);
}

// Elimina el título después de 5 segundos
setTimeout(() => {
    root.removeChild(titulo);
}, 5000);
////////////////////////////////////////////////////////
