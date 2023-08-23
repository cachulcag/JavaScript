// Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
// 'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.

const persona = {
    nombre: 'Cris',
    edad: 20,
    sexo: 'H',
    peso: 65.0,
    altura: 1.65,
}

const mostrar = JSON.stringify(persona); //paso un objeto a JSON y lo mando lo transformo en string com stringify
console.log(mostrar);
