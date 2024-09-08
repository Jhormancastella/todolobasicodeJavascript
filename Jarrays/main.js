//un vector //
console.log("------por vector------")
let miVector = [1,2,3,4,5];

console.log(miVector);
//como ver la posicion dentro del vector//
console.log(miVector[4])
console.log("------por matriz------")
//una matriz//
let miMatriz = [[1,2],
                [3,4],
                [5,6],
                [7,8]];

console.log(miMatriz);
//como ver la posicion dentro de una matriz//
console.log(miMatriz[0][0]);

//para ver nombre aplicamos el mismo principio//

let Vnombre = ["jesus","jhorman","Yeisa","Rosy"];
// usamos el console.log para ver por consola el nombre del array//
console.log("------por vector------")
console.log(Vnombre[1]);

//para una matriz de nombres //
console.log("------por matriz------")
let Mnombres = [["jesus","luis"],
                ["jhorman","castellanos"],
                ["rosy","Dana"],
                ["Yeisa","Daniela"]];

// usamos el console.log para ver por consola el nombre de la matriz//
console.log(Mnombres[2][0]);

////////////////////////////////
//para los vectores//
console.log("------por vector con datos------")
let vector = new Array(3);
vector[0] ="jesus";
vector[1] ="jhorman";
vector[2] ="Rosy";
console.log(vector)
//para las matrices//
console.log("------por matriz vacia------")
let matriz = new Array (3);

for(let i=0;i<3;i++){
    matriz[i] = new Array(3);
}
console.log(matriz);

//para recordar un vector solo tiene una dimencion//

//para recordar las matrices tiene  bimencionales(filas,columnas)//

//ejemplo para recorer un vector//
console.log("------por vector------")
let Vamigos = ["checho","Diego","Miguel"];

//con este metodo podemos obtener cada uno de los datos por separados y ordandos uno debajo del otro//
for (let i=0; i<Vamigos.length; i++){
    console.log(Vamigos[i]);
}

//ejemplo para recorer una matriz//

console.log("------por matriz vacia------")

let Mfamilia =[
    ["mama","papa","jesus","jaqueline"],
    ["hermana","hermano","wiliam","deisy"],
    ["primos","primeas","jhonatan","daniela"]
    ];

for (let G=0; G<Mfamilia,length; G++){
    for (let Y=0; Y<Mfamilia[G].length; Y++){
        console.log(Mfamilia[G][Y]);
    }
}