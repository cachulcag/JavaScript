// Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
// de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
// para calcular el área y el perímetro se utilizan las siguientes fórmulas:
// area = PI * radio2
// perimetro = 2 * PI * radio

const PI = 3.141516;
var radio = parseInt(prompt("Ingrese el radio de la circunferencia"));
var mensaje =
`El área es: ${Math.pow(radio,2)}
El perímetro es: ${(2 * PI * radio)}`
alert (mensaje);