const textArea = document.querySelector
("#inputParrafo");
const condicion = document.getElementById
("resultado");
const resultado = document.getElementById
("palabramagica");

textArea.value ="";
//????? Tenemos espacios vacios al inicio
textArea.addEventListener("change", function () {
    resultado.innerHTML="";
    const palabras = textArea.value.split(" ");

    palabras.forEach(palabra => {
         if (palabra.toLowerCase() != "gato") {
            resultado.innerHTML +`${palabra}`;
         } else {
         resultado.innerHTML += `<strong>${
             palabra.toUpperCase()}</strong>`
        }
    });
});

//actualizar //



function actualizarResultado() {
    resultado.innerHTHL ="";
    const palabras = textArea.value.split("");
    const palabraMagica = condicion.value.toLowerCase();

    palabras.forEach(palabra => {
        if (palabra.toLowerCase()!= palabraMagica) {
            resultado.innerHTML +=`${palabra}`;
        } else { resultado.innerHTML += `<strong clase="resaltado">${palabra.toUpperCase()}</strong>`
        }
    });
}
    textArea.addEventListener("change", actualizarResultado);
    condicion.addEventListener("change",actualizarResultado);
////

const body = document.getElementById("body");

const titulo = document.createElement("h1"); // Crear h1 titulo.textContent = "Bienvenidos a la farmacia CRUZ";

// classList accedemos a las clases de nuestros elementos 

titulo.classList.add("resaltado");

body.appendChild(titulo);