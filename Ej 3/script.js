// Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
// edad se debe mostrar un mensaje indicándolo.


do {
    var edad = parseInt(prompt("Ingrese su edad "));
    (edad >= 18) ? alert("Eres mayor de edad") : alert("No eres mayor de edad");
} while (edad < 18);

