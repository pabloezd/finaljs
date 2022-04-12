
//CODIGO PARA CARRITO en "Productos"

let productos = [];
let total = 0;


function agregar(producto, precio) {
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("btncarrito").innerHTML = `Total $${total}`
}

function pagar() {
    Swal.fire(productos.join(" \n"));
}

