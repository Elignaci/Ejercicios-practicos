//EJERCICIO 3 -Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.

/* 
-înicio

-Escribir "libro" + titulo, + autor, + anio

-Leer libros

-Para libros

-Si anio >= anio 2000 Entonces 
"Almacenar todos los libros de ese año "

Fin si

Fin para libros

Fin */


const anioLibro = [
    {
        libro: "El señor de los anillos",
        autor: "Tolkien",
        anio: 1954
    },


    {
        libro: "El problema de los tres cuerpos",
        autor: "Cixin Liu",
        anio: 2006
    },

    {
        libro: "Eisenhorn",
        autor: "Dan Abnett",
        anio: 2001
    },

];

const publico = () => {
    anioLibro.forEach(item => {
        if (item.anio >= 2000) {
            console.log(item.libro);

        }

    });
};



publico();