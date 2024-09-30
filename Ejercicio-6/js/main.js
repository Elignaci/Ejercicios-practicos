/* EJERCICIO 6 – Hacer un programa que:

ingreso de un numero por teclado
Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras. */

/*Pseudocodigo
inicio
Escribir numero 
Leer numero 
Si numero < 10 
    Escribir numero tiene una cifra
Si numero < 99 
    Escribir numero tiene dos cifras
Si numero < 999 
    Escribir tiene tres cifras
Fin Si
Fin 
*/


let num = parseInt (prompt("Escribe un número"));//parseInt es para transformar un string en un numero

if (num < 10) {
    console.log("Este número tiene una cifra");
} else if (num < 99) {
    console.log("Este número tiene dos cifras");

} else if (num < 999) {
    console.log("Este número tiene tres cifras");

} else {
    console.log("Número no válido");
}





