

function Producto(nombre, stock, precio){
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
}
//PRODUCTOS
const prod1 = new Producto (" Amoladora", 10, 500);
const prod2 = new Producto (" Sierra", 15, 600);
const prod3 = new Producto (" Taladro", 30, 450);

const listaProd = [prod1, prod2, prod3]
const allProducts = [listaProd[0].nombre, listaProd[1].nombre, listaProd[2].nombre]

//Accesorios
const accesorios = [
    {nombre: "Disco de corte", precio: 150},
    {nombre: "Hoja de corte", precio: 200},
    {nombre: "Mecha 13mm", precio: 300},
]

//Repuestos
const repuestos = [
    {id: 1, nombre: "Rotor", precio: 100},
    {id: 2, nombre: "Estator", precio: 100},
    {id: 3, nombre: "Carbones", precio: 20},
    {id: 4, nombre: "Switch", precio: 40},
]

// Funciones para ahorrar codigo
function stockSuficiente(cantidad, precio){
    alert("El total de su compra es de $" + cantidad * precio);
}
function stockQueda(producto, stock){
    console.log("Stock Restante " + producto + ": " + stock);
}


//EVENTOS
let boton = 
document.getElementById("15");
boton.addEventListener("click", respuestaClick);
function respuestaClick(){
    console.log("Ha obtenido un 15% de descuento en su compra ");
}

/*
let subs = document.getElementsByClassName("form-control")[0];
subs.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log("Se ha suscrito a nuestro Newsletter con éxito ")
    }
});
*/

let nuevoIngreso = 
document.getElementById("d1");
nuevoIngreso.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d1").value)
        let saludo = document.getElementById("holis");
        console.log(saludo.innerText);
        saludo.innerText = saludo.innerText + " Bienvenido a nuestra Ferretería " + nuevoIngreso.value;
    }
});

let nuevoEmail = 
document.getElementById("d2");
nuevoEmail.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d2").value)
    }
});

let comproa = 
document.getElementById("d3");
comproa.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d3").value)
        let tota = document.getElementById("totala");
        console.log(tota.innerText);
        tota.innerText = tota.innerText + " El total de su compra es: $  " + (comproa.value * listaProd[0].precio);
    }
    else {tota = document.getElementById("totala");
    console.log(tota.innerText);
    tota.innerText = tota.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let compros = 
document.getElementById("d4");
compros.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d4").value)
        let tots = document.getElementById("totals");
        console.log(tots.innerText);
        tots.innerText = tots.innerText + " El total de su compra es: $  " + (compros.value * listaProd[1].precio);
    }
    else {tots = document.getElementById("totals");
    console.log(tots.innerText);
    tots.innerText = tots.innerText + " Por favor ingrese un numero inferior a 999  " }
});

let comprot = 
document.getElementById("d5");
comprot.addEventListener("keyup", function(event) {
    if (event.key <= 999) {
        console.log(document.getElementById("d5").value)
        let tott = document.getElementById("totalt");
        console.log(tott.innerText);
        tott.innerText = tott.innerText + " El total de su compra es: $  " + (comprot.value * listaProd[2].precio);
    }
    else {tott = document.getElementById("totalt");
    console.log(tott.innerText);
    tott.innerText = tott.innerText + " Por favor ingrese un numero inferior a 999  " }
});

//Local Storage y JSON

localStorage.setItem ('bienvenida', 'Bienvenido a Ferretería PALO!');
let welcome = localStorage.getItem('bienvenida');
console.log(welcome);

localStorage.setItem ('sugeridos', 'Te sugerimos los siguientes productos para tu proyecto:  ' + allProducts);
let siempre = localStorage.getItem('sugeridos');


let proy = 
document.getElementById("d6");
proy.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d6").value)
        let sugs = document.getElementById("proyecto");
        console.log(sugs.innerText);
        sugs.innerText = sugs.innerText + siempre
    }
});

const enJSON  = JSON.stringify(accesorios);
console.log(enJSON);

//OPERADORES AVANZADOS
//Operador Ternario

let edadRequerida = 
document.getElementById("d7");
edadRequerida.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        console.log(document.getElementById("d7").value)
        let edadControl = document.getElementById("edad");
        console.log(edadControl.innerText);
        edadControl.innerText = edadRequerida.value >= 18 ? "Puede realizar sus proyectos con nuestras herramientas!" : "Por favor realice sus proyectos bajo la supervision de un adulto";
    }
});

//Operador AND
let subs = document.getElementsByClassName("form-control")[0];
subs.addEventListener("keyup", function(event) {
    event.key === "Enter" && alert("Se ha suscrito a nuestro Newsletter con éxito ")
});

// Librerias

Swal.fire({
    title: 'Ingresó correctamente a ferretería PALO, bienvenido!',
    text: 'Recuerde que puede pagar con tarjetas de crédito o MercadoPago',
    icon: 'success',
    confirmButtonText: 'A comprar herramientas!',
    confirmButtonColor: '#11120f',
})


//Fetch

const lista = document.querySelector('#listado')

fetch('/data.json')
    .then( (res) => res.json())
    .then( (data) => {

        data.forEach((producto) => {
            const li = document.createElement('li')
            li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>Precio: $ ${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `
   
            lista.append(li)
        })
    })