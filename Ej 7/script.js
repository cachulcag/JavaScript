// Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
// solicite números al usuario hasta que la suma de los números introducidos supere el
// límite inicial.

var limite = parseInt(prompt("Ingrese un número positivo"))
var suma = 0;
do {
    suma += parseInt(prompt("Ingrese un número"));
    alert("La suma es: " + suma)
} while (suma<=limite);

alert("Felicidades, has superado el límite")
