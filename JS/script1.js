//EVENTOS
let boton = 
document.getElementById("15");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    alert("Ha obtenido un 15% de descuento en su compra ");
}


// Librerias

Swal.fire({
    title: 'Ingresó correctamente a ferretería PALO, bienvenido!',
    text: 'Recuerde que puede pagar con tarjetas de crédito o MercadoPago',
    icon: 'success',
    confirmButtonText: 'A comprar herramientas!',
    confirmButtonColor: '#11120f',
}) 

