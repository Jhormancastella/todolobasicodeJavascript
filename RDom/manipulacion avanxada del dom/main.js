const terminosCondiciones = document.getElementById
 ('terminos');
const miForm = document.querySelector("#miForm")

function isCheckboxOn() {

    if (terminosCondiciones.checked) {

        miForm.innerHTML += addForm();

    } else if (!terminosCondiciones.checked) {

        miForm.innerHTML="";

        console.log("He sido deseleccionado");

    }
}

function addForm() {
    let resultado =  ""
    resultado += '<input type="text" id="miInput"/>';
    resultado += '<label for="miInput"> ingrese tu edad</label>'; 
    return resultado;

}
terminosCondiciones.addEventListener("change",
     isCheckboxOn);

console.log(terminosCondiciones);