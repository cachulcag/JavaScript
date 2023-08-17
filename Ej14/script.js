// Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor, 
// Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario y luego informar 
// mediante otro método el número de ISBN, el título, el autor del libro y el numero de páginas.



function crearLibro() {
    let ISBN = prompt('Ingrese el número de ISBN');
    let Titulo = prompt('Ingrese el título');
    let Autor = prompt('Ingrese el Autor');
    let NumPag = prompt('Ingrese el número de páginas');

    let libro = {
        ISBN: ISBN,
        Titulo: Titulo,
        Autor: Autor,
        NumPag: NumPag,
    }
    return libro;
}

let mostrar = () => console.table(crearLibro());
mostrar();
