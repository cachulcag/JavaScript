// Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
// de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
// programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
// Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
// ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
// 0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
// de 20.

//Rellenar Arrays
let arrayA = llenarArray(50);
let arrayB = llenarArray(20);

//Mostrar Arrays
console.log(arrayA);
console.log(arrayB);

//Ordenar 
arrayA.sort(compareNumeric);

//Reemplaza los 10 primeros digitos
arrayB.splice(0, 10, (arrayA.slice(0, 10)));

//Aplana y reemplaza los ultimos 10 elementos con 0.5
arrayB = arrayB.flatMap(function (elemento, index) {
    if (index > 1) {
        return '0.5';
    } else {
        return elemento;
    }
});

//Mostrar 
console.log(arrayA);
console.log(arrayB);


//Funciones 
function llenarArray(num) {
    let array = [];
    for (let index = 0; index < num; index++) {
        array[index] = (Math.random() * 100).toFixed(1);
    }
    return array;
}

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}