// Array de usuarios
const USUARIOS = [
  { nombre: "admin", contraseña: ["secreta", "123456"] },

];

function buscarUsuario(nombre) {
  return USUARIOS.find(usuario => usuario.nombre === nombre);
}

// Función para comprobar la contraseña
function comprobarContraseña(usuario, contraseña) {
  return usuario && usuario.contraseña.includes(contraseña);
}

let nombreUsuario = prompt("Ingresar nombre usuario");
let password = prompt("Ingresar contraseña");

// Buscar el usuario en el array
const USUARIOENCONTRADO = buscarUsuario(nombreUsuario);

if (comprobarContraseña(USUARIOENCONTRADO, password)) {
  console.log("Puede acceder");
  alert("Contraseña correcta");
} else {
  console.log("Hay algún error, vuelve a insertar los datos");
  alert("Contraseña incorrecta");
}

let iniciarSesion = prompt("¿Has iniciado sesión? Contestar con SI o NO");

if (iniciarSesion.toLowerCase() === "no") {
  console.log("Por favor, inicia sesión");
} else {
  console.log("¡Bienvenido de nuevo!");
}

function comprobarEdad() {
  const EDAD = parseInt(prompt("Ingresar edad"));

  if (EDAD >= 18) {
    return "Es mayor de edad";
  } else {
    return "No es mayor de edad";
  }
}

const resultadoEdad = comprobarEdad();
console.log(resultadoEdad);

let enStock = true;
let precioConDescuento = false;

if (enStock || precioConDescuento) {
  console.log("Producto disponible");
} else {
  console.log("Producto agotado");
}

// Objeto constructor

function Modelo(marca, modelo, talle) {

  this.marca = marca
  this.modelo = modelo
  this.talle = talle
}

const MODELO_UNO = new Modelo("adidas", "predator", "46")
const MODELO_DOS = new Modelo("nike", "timepo", "36")

console.log(MODELO_UNO);
console.log(MODELO_DOS);

MODELO_DOS["marca"] = "puma"

console.log(MODELO_DOS);

let suma = 0;
let continuar;

do {
  const NUMERO = parseFloat(prompt("Ingresar el número a sumar"));

  if (!isNaN(NUMERO)) {
    suma += NUMERO;
    continuar = prompt("¿Quiere ingresar otro número? (SI o NO)").toLowerCase();
  } else {
    alert("Ingresamos un número inválido");
    continuar = "si";
  }
} while (continuar === "si");

alert("La suma total es: " + suma);

const IVA = 1.21;

function Producto(nombre, precio, srock) {
  this.nombre = nombre
  this.precio = precio
  this.stock = stock
  this.precioConIVA = function () {
    let precioFinal = this.precio * IVA;
    return "$" + precioFinal
  }
}
const PRODUCTO_UNO = new ("Puma", 200000, 2);
const PRODUCTO_DOS = new ("Adidas", 300000, 3);

console.log(PRODUCTO_UNO);
console.log(PRODUCTO_UNO.precioConIVA())
console.log(PRODUCTO_DOS.precioConIVA())
 

const BOTINES = [
  {
    marca: "nike",
    modelo: "tiempo"
  },
  {
    marca: "adidas",
    modelo: "predator"
  },
  {
    marca: "puma",
    modelo: "borussia"
  }
]

console.log(BOTINES)

for (const productosBotines of BOTINES){
  console.log(productosBotines);
}