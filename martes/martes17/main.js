
// // //objeto literal //
// // const persona = {
// //     nombre: "juan",
// //     presentacion: function() {
// //         console.log(this.nombre);
// //     }
// // }
// // const persona2 = {
// //     nombre: "juan",
// //     presentacion: function() {
// //         console.log(this.nombre);
// //     }
// // }

// const persona3 ={};

// // OBJETO       -       CLASE
// const formulario = new FormData();// upper camel case
// const promesa = new Promise();//

class studiante {
    edad;
    constructor(nombre){
        this.nombre = nombre;
        // console.log(`hola soy ${nombre}`);
    };
    estudiar(){
        console.log("estoy estudiando");
    }
}

class StudianteUni extends studiante {
    semestre = 8;
    
    constructor(nombre){
        super(nombre);//new estudiante (nombre);
    }

    estudiar(){
        console.log("estoy estudiando en la universidad");
    }


}
new studiante("karen").estudiar();
const studiante1 = new StudianteUni();
studiante1.edad =16;
studiante1.nombre = "jesus"
studiante1.estudiar();
console.log(studiante1);

// // const studiante1 = new studiante("jesus");
// studiante1.edad = 16;
// studiante1.estudiar();
// const studiante2 = new studiante("jhorman");
// const studiante3 = new studiante("danna");
// const studiante4 = new studiante("maria");

// console.log(studiante1+studiante2)

// console.log(studiante2)