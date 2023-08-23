// Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
// dato.
let dato = prompt("Escriba un dato o digite una tecla: ");

//validar datos si es un numero, booleano o string
if (!isNaN(dato)) {
    dato = parseFloat(dato); //Convierto el dato en un número
} else if (dato.toLowerCase() === "true" || dato.toLowerCase() === "false") {
    dato = true;
}

let tipoDato = (dato) => console.log(typeof dato);
tipoDato(dato);

let data = () => console.log(typeof 'soy un String');// puedes escribir directamente la información
data();