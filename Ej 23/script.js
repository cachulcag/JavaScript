// Resalte todas las palabras de más de 8 caracteres en el texto del párrafo

//si quiero aplicar a todos los p necesito introducirlo en un for of
document.getElementsByTagName("p")[0].innerHTML = document //[0] sirve para elegir cual "p" deseo modificar porque la funcion trae un array de tags
  .getElementsByTagName("p")[1]
  .innerText.split(" ")
  .map((palabra) =>
    palabra.length > 8 ? `<span class = "yb"> ${palabra}</span>` : palabra // crea un span
  )
  .join(" ");

var css = document.createElement("style"); //crea un elemento css
css.innerHTML = ".yb {background-color: yellow;}"; // ingresa el codigo css
document.getElementsByTagName("head")[0].appendChild(css); //pone al css en el head