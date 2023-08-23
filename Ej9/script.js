// Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
// espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el funcionamiento de la función Substring().

let frase = prompt("Ingrese una frase").split('');
frase.join(' ');
console.log(frase);

// var ver = '';
// for (let letra of frase) {
//     ver += letra + ' ';
// }
// console.log(ver)

