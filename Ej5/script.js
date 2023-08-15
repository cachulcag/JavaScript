// Construir un programa que simule un menú de opciones para realizar las cuatro
// operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
// numéricos enteros. El usuario, además, debe especificar la operación con el primer
// carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
// o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.

var num1 = parseInt(prompt("Ingrese el primero número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));

var opcion = prompt(
    `Bienvenido a la Calculadora EGG
1. Suma
2. Resta
3. Division
4. Multiplicación
Que desea hacer?`);

switch (opcion) {
    case '1':
        alert("La suma es: " + (num1 + num2));
        break;
    case '2':
        alert("La resta es: " + (num1 - num2));
        break;
    case '3':
        alert("La multiplicación es: " + (num1 * num2));
        break;
    case '4':
        alert("La división es: " + (num1 / num2));
        break;
    default:
        alert("Solo puedes ingresar números del 1 al 4")
}