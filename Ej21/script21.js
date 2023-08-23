// Escribir un programa para obtener un array de las propiedades de un objeto Persona.
// Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.

//CREAR ARRAY DE OBJETOS 
// let personas = [];
// personas[0] = crearPersona();
// console.log(personas);

crearPersona();

function crearPersona() {
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad");
    let sexo = validarEntrada();
    let peso = parseFloat(prompt("Ingrese su peso"));
    let altura = parseFloat(prompt("Ingrese su altura"));

    const persona = {

        nombre: nombre,
        edad: edad,
        sexo: sexo,
        peso: peso,
        altura: altura,
    }
    //return persona

    //ARRAY CON LAS PROPIEDADES DEL OBJETO
    const propiedadesPersona = Object.values(persona);
    console.log(propiedadesPersona);
    
}

function validarEntrada(nombre) {
    let sexo;
    do {
        sexo = prompt("Ingrese su sexo hombre(H), mujer(M) u Otro (O)").toUpperCase();
        if (sexo !== 'H' && sexo !== 'M' && sexo !== 'O') {
            alert('Opción de sexo no válida. Ingrese nuevamente');
        }
    } while (sexo !== 'H' && sexo !== 'M' && sexo !== 'O');
    return sexo;
}
