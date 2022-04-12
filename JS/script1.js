//EVENTOS
let boton = 
document.getElementById("15");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    Swal.fire({
        title: 'Ha obtenido un 15% de descuento en su compra ',
        icon: 'success',
        confirmButtonText: 'Seguir comprando...',
        confirmButtonColor: '#11120f',
    })  
}


// Librerias
Swal.fire({
    title: 'Ingresó correctamente a ferretería PALO, bienvenido!',
    text: 'Recuerde que puede pagar con tarjetas de crédito o MercadoPago',
    icon: 'success',
    confirmButtonText: 'A comprar herramientas!',
    confirmButtonColor: '#11120f',
})  

//Fetch con JSON local
const lista = document.querySelector('#marcas')

fetch('/data1.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h6>${producto.nombre}</h6>
            `
   
            lista.append(li)
        })
    })