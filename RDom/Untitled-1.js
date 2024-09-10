const input1 = document.getElementById("lista1_input1");
const input2 = document.getElementById("lista1_input2");
const input3 = document.getElementById("lista1_input3");
input1.addEventListener("change", () => {
// Revisar si esta vacio
if (input1.value != "") {
input1.setAttribute("contestado", "true");
} else
input1.setAttribute("contestado", "false");
console.log(input1.getAttribute("contestado"));
});

input1.addEventListener("change", () => {
    // Revisar si esta vacio
    if (input1.value != "") {
    input1.setAttribute("contestado", "true");
    } else {
    input1.setAttribute("contestado", "false");
    }
    console.log("nombre", input1.getAttribute("contestado"));
    });

input2.addEventListener("change", () => {
    if (input2.value != "") {
        input2.setAttribute("contestado", "true");
    } else {
        input2.setAttribute("contestado", "false");
    }
    console.log("edad ",input2.getAttribute("contestado"));
    

    });