// document.getElementById('pregunta').addEventListener('change', function() {
//     const surveyForm = document.getElementById("Form");
//     if (this.checked) {
//     surveyForm.style.display="block";
//      } else {
//         surveyForm.style.display = "none";
//         document.getElementById('results').style.display = "none";
//         }
// });
// document.getElementById('Form').addEventListener('submit', function(event) {
//      event.preventDefault();

//     const name= document.getElementById('name').value;
//     const edad =document.getElementById('edad').Value;
//     const Telefono =document.getElementById('Telefono').value;
//     const email = document.getElementById('email').value;
//     const feedback= document.getElementById('feedbacK').value;
//     document.getElementById('resultName').textContent =name;
//     document.getElementById('resultEdad').textContent =edad;
//     document.getElementById('resulTelefono').textContent = Telefono;
//     document.getElementById('resultEmail').textContent =email;
//     document.getElementById('result Feedback').textContent =feedback;
//     document.getElementById("results").style.display ='block';
//     document.getElementById("Form").reset();
//     document.getElementById('Form').style.display = 'none';

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