// Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
// muestre el siguiente array [6, 9, 12, 15, 18].


let array = [[3], [6], [9], [12], [15]];

array = array.flat();
array.splice(0,2);
array.push(18);

console.log(array);