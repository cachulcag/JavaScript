// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

let palabraMasLarga = "";
let palabra = prompt("Ingrese una frase: ").split(' ').map(function (elemento){
   
    if (elemento.length>plarga.length) {
        palabraMasLarga = elemento;
    }
});
console.log(palabraMasLarga);