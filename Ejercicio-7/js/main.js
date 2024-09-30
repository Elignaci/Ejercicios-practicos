/* Solicite al usuario que escriba un color. Si ese color existe que lo traduzca al inglés, sino que muestre un mensaje de error. */

/* Pseudocodigo 
Escribir color
Leer color
Si color existe
    Escribir "Traduccion al ingles"
Si no 
    Escribir "Color no existe"
Fin si
Fin

*/
const colores = {

    azul: "blue",
    rojo: "red",
    verde: "green",
    morado: "purp",
    amarillo: "yellow",
    blanco: "white",
    negro: "black",
    marron: "brown",
    rosa:"pink"
};



const escribeColor = (prompt("Escriba un color"))
{


    if (colores[escribeColor]){
        console.log(
            `${escribeColor} traduccion al ingles como ${colores[escribeColor]}`);
        } else {
        (colores[escribeColor])
        console.log("Este color no existe")
        }
};
