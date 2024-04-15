const formulario = document.querySelector("form"); // se eliminó el # para que seleccione el formulario correctamente
//se cambió el var por const y se puso el ;

formulario.onsubmit = function(event) {
//Se cambió el nombre de la variable edadElement a event
  event.preventDefault();
  // Se cambió el prevent a preventDefault()

  var nombreElement = formulario.elements[0]
  var edadElement = formulario.elements[1]
  var nacionalidadElement = formulario.elements[2]

// Se mejoró el nombre de las variables

  var nombre = nombreElement.value
  var edad = edadElement.value

  var i = nacionalidadElement.selectedIndex;
  var nacionalidad = nacionalidadElement.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreElement.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadElement.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

// var botonBorrar = document.createElement("button");
// botonBorrar.textContent = "Eliminar invitado";
// botonBorrar.id = "boton-borrar";
// Se comentó este código para que no se agregue el botón fuera de la lista de invitados
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
// Se agregaron los ; faltantes

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados");
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // Se cambió added a add para que funcione correctamente
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
// var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
// spanNombre.textContent = "Nombre: ";
// inputNombre.value = nombre;
// elementoLista.appendChild(spanNombre);
// elementoLista.appendChild(inputNombre);
// Se comentó este bloque de código para que no se repita la sección de nombre
elementoLista.appendChild(espacio);


crearElemento("Nombre", nombre, elementoLista)
crearElemento("Edad", edad, elementoLista)
crearElemento("Nacionalidad", nacionalidad, elementoLista)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}
// Se movió de lugar la función para que no estuviera dentro de otra
function crearElemento(descripcion, valor, elementoLista) { // Se le agregó otro parámetro para que mantenga la funcionalidad
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  }