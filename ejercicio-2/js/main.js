/* Crea un objeto que represente un producto con las propiedades nombre, precio, y disponible (un booleano).

Escribe una función que imprima la información del producto solo si está disponible. */

const productos = {
    nombre: "Caja",
    precio: '35$',
    disponibilidad: true

}

const impresion = () => {
    if (productos.disponibilidad) {
        console.log(productos)

        for (let existe in productos){
            document.write(
            `
            <p>${existe} - ${productos[existe]}</p>
            `
            
            )
            console.log(productos.nombre, "esta disponible")
        }

    } else {
        console.log("objeto no disponible")
    }
}
impresion()