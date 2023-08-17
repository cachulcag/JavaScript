// Escribir una función que reciba un String y devuelva la palabra más larga.
// String Ejemplo: “Guia de JavaScript”
// Resultado esperado : “JavaScript”

console.log(palabraMasLarga())

function palabraMasLarga(){
    let frase = prompt("Ingrese una frase").split(' ');
    let palabraLarga = '';

    for (let palabra of frase) {
        if(palabra.length > palabraLarga.length){
            palabraLarga=palabra;
        }
    }
    
    return palabraLarga;
}