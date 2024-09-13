const textArea = document.querySelector
("#inputParrafo");
const condicion = document.getElementById
("palabraMagica");
const resultado = document.getElementById
("resultado");

textArea.value = "";

function actualizarResultado(){
    resultado.innerHTML = "";
    const palabra = textArea.value.split(" ");
    const palabraMagica = condicion.value.tolowerCase();

    palabras.array.forEach(palabra => {
        if (palabra.tolowerCase() != palabraMagica){
            resultado.innerHTML += `${palabra}`;
        }else { 
            resultado.innerHTML += `<strong clase="resaltado">${palabra.toUpperCase()}</strong>`
        }
        
    });
}
textArea.addEventListener("change",actualizarResultado);
condicion