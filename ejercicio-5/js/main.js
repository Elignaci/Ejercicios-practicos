/* EJERCICIO 5 – Hacer un programa que:

Solicite al usuario el ingreso por teclado de 3 notas.
Saque la media de las notas.
Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente' */

/* Pseudocodigo
Leer usuario 
Escribir "usuario" + nota 
Leer nota 
     
Si nota < 5 
     Escribir "SUSPENSO"
Si no nota >= 5 y < 7 
     Escribir "APROBADO"
Si no nota >= 7 y <= 10 
     Escribir "SOBRESALIENTE"
Fin si 
Fin
 */

let estudiantes = [
    {
        nombre: "Jesus",
        nota: 5
    },
    {
        nombre: "Isaac",
        nota: 8
    },
    {
        nombre: "Judas",
        nota: 4
    }

];

const notaFinal = () => {
    estudiantes.forEach(item => {
        if (item.nota < 5)
            console.log(`${item.nombre} ${item.nota} SUSPENSO`)

        if (item.nota >= 5 && item.nota < 7)
            console.log(`${item.nombre} ${item.nota} APROBADO`)

        if (item.nota >= 7 && item.nota <= 10)
            console.log(`${item.nombre} ${item.nota} SOBRESALIENTE`)


    })
};
notaFinal();




