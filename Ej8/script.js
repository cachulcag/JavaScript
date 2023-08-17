// Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
// programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
// todos ellos.

var max, min, numeroIngresado, sum, i = 0;

while (numeroIngresado != 0) {
    numeroIngresado = parseInt(prompt("Ingrese un número, ingresa 0 para finalizar"));
    if (i = 0) {
        max = numeroIngresado;
        min = numeroIngresado;
        sum = numeroIngresado;
    }
    sum = + numeroIngresado;
    i++;
    console.log(sum, i);
    (numeroIngresado > max) ? max = numeroIngresado : (numeroIngresado < min && numeroIngresado != 0) ? min = numeroIngresado : alert(numeroIngresado);
    console.log(max, min);
};

alert(
    `el número máximo es: ${max}
    el número minimo es: ${min}
    el promedio es: ${sum / i}`);
