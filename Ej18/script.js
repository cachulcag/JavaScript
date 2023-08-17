// A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
// a) Determinar cual de los dos elementos de texto es mayor
// b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
// operadores necesarios para obtener un resultado true y otro resultado false
// c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
// dos elementos numéricos




var valores = [true, 5, false, "hola", "adios", 2];

const textoMayor = valores.filter(elemento => typeof elemento === "string");
const boleano = valores.filter(elemento => typeof elemento === "boolean");
const numeros = valores.filter(elemento => typeof elemento === "number");

operacionesNumeros(numeros);

console.log("Texto con mayor longitud:", textoMayor);
console.log("Boleano:", boleano);
console.log("Numeros:", numeros);

function operacionesNumeros(arr) {
    for (let index = 0; index < arr.length - 1; index++) {
        const actual = arr[index];
        const siguiente = arr[index + 1];

        console.log(`Suma: ${actual + siguiente}`);
        console.log(`Resta: ${actual - siguiente}`);
        console.log(`Multiplicación: ${actual * siguiente}`);
        console.log(`División: ${actual / siguiente}`);
    }
}
