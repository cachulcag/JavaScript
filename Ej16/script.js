// Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
// y los muestre por pantalla.
let array = [];
let array2 = [];
const rellenar = (array, array2) => {

    for (let index = 0; index < 5; index++) {
        array.push(Math.ceil((Math.random() * 10)));
        array2.push(Math.ceil((Math.random() * 10)));
    }
    console.log(array);
    console.log(array2);
}

rellenar(array, array2);