// Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
// resultado

let array = [1, 2, 3, 4, 5];
console.log(array);

const eliminarElementos = () => {
    for (let index = 0; index < 2; index++) {
        array.pop();
    }
}
eliminarElementos();
console.log(array);