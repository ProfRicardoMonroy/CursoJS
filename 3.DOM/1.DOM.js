// Document Object Model
// Nodos: Todos los elementos, atributos, texto y cosas.
// Elementos: Son nodos que representan etiquetas HTML
// Atributos: Son propiedades que proporcionan información adicional (id, class, src)
// Texto: Contenido textual

// Selección de elementos:
// getgetElementById(): Selecciona un elemento por su atributo ID
const elemento1 = document.getElementById('article');

// querySelector(): Selecciona el primer elemento que coincida con un selector CSS
const elemento2 = document.querySelector('.laClasse');

// querySelectorAll(): Selecciona todos los elementos que coincidan con un selector CSS
const elemento3 = document.querySelectorAll('div.clase');

// Modificar elementos
// textContent: Establece o devuelve el contenido de texto de un elemento
elemento1.textContent = 'Nuevo contenido';

// innerHTML: Establece o devuelve el contenido HTML de un elemento
elemento1.innerHTML = '<a>Nuevo contenido</a>';

// setAtribute: Añade o modifica un atributo del elemento
elemento1.setAttribute('href', "https://roadmap.sh")

// Escuchar eventos
// addEventListener(): Permite escuchar eventos en elementos como clicks o cambios de entrada
elemento1.addEventListener('click', function () {
    console.log('Elemento clickeado');
})

// Crear y añadir elementos
// createElement(): Crear nuevo elemento
const nuevoElemento = document.createElement('div');

// appendChild(): Crear nuevo elemento hijo del elemento seleccionado
nuevoElemento.appendChild(elemento2);

// Trabajo con formularios
const miFormulario = document.forms['formulario'];

const inputFormulario = miFormulario.elemento['nombre'];

miFormulario.addEventListener('submit', function (event) {
    event.preventDefault();
    //
})