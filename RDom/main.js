const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

input1.setAttribute("placeholder", "Colombia vs Argentina")

const currentYear = new Date().getFullYear().toString();

console.log(currentYear);

input2.setAttribute("max", currentYear);
///
input3.addEventListener("click", () => {
    input1.setAttribute("type", "password");
});

///
input3.addEventListener("click", () => {
    const atributo = input1.getAttribute("type");

    if (atributo == "text") {
        input1.setAttribute("type", "password");
    } else if(atributo == "password") {
        input1.setAttribute("type", "text")
    //contador //
        setTimeout(() => {
            input1.setAttribute("type", "password"); 
        }, 2000)
    }
});
//para desbloquear el boton para enviar//
input2.addEventListener("change",()=>{
    input3.toggleAttribute("disabled",false);
})

//version de luis //

input2.addEventListener("change", () => {
    const disabled = input3.toggleAttribute("disabled");
    if (disabled = true) {
    input3.toggleAttribute("disable", true)
    } else if (disabled = false) {
    input3.toggleAttribute("disable", false)
    }
});