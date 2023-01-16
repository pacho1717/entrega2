const productos = [
    { id: 1, nombre: "hamburguesa", precio: 200, categoria: "comida" },
    { id: 2, nombre: "guiso", precio: 150, categoria: "comida" },
    { id: 3, nombre: "cerveza", precio: 100, categoria: "bebida" },
    { id: 4, nombre: "cola", precio: 50, categoria: "bebida" },
    { id: 5, nombre: "torta", precio: 50, categoria: "postre" },
    { id: 6, nombre: "ensalada de frutas", precio: 50, categoria: "postre" },

]

function filtrar(comida) {
    comida = productos.filter(producto => producto.categoria === categoria
    )
    alert(comida[0].id + " " + comida[0].nombre + " $" + $comida[0].precio + " " + comida[1].id + " " + comida[1].nombre + " $" + comida[1].precio)
}
function filtrar(bebida) {
    bebida = productos.filter(producto => producto.categoria === categoria
    )
    alert(bebida[0].id + " " + bebida[0].nombre + " $" + bebida[0].precio + " " + bebida[1].id + " " + bebida[1].nombre + " $" + bebida[1].precio)
}


function filtrar(postre) {
    postre = productos.filter(producto => producto.categoria === categoria
    )
    alert(postre[0].id + " " + postre[0].nombre + " $" + postre[0].precio + " " + postre[1].id + " " + postre[1].nombre + " $" + postre[1].precio)
}

let categoria;

let seleccion = prompt("hola que desea comer o tomar algo?").toLowerCase()



while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt("hola que desea comer o tomar algo? si o no?").toLowerCase()

}

if (seleccion == "si") {

    categoria = prompt("escriba lo que desee : comida, bebida, postre ").toLowerCase();

    if (categoria == "comida" || categoria == 'bebida' || categoria == 'postre') {
        filtrar(categoria)
    }
}


else if (seleccion == "no") {
    alert("gracias por venir, hasta pronto")

}





