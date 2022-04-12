
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