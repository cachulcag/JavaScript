// Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
// con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
// radio del círculo lo proporcionará el usuario.

const calcularArea=(radio)=>{
    return Math.PI * (valor*2);
}
const calcularPerimetro=(radio)=>{
    return (2 * PI * radio);
}
let radio = parseInt(prompt("Indique el radio del circulo"));
alert(
`El área es: ${calcularArea(radio)} cm
El perímetro es: ${calcularPerimetro(radio)} cm`
);