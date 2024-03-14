// Funciones
// Funciones declaradas
function nombreDeLaFuncion(parametros) {
    // Cuerpo de la función
}

function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Ricardo'));


// Expresiones de Función
const numbreDeLaVariable = function (nombreDeFuncionOpcional) {
    // Cuerpo de la función
}

const saludo = function (nombre) {
    return `Hola ${nombre}`;
}

console.log(saludo('Ricardo'));

// Funciones Flecha
const nombreDeLaFuncionFlechita = (parametros) => {
    // Cuerpo de la función
};

const suma = (a, b) => a + b;

console.log(suma(5, 3));


// Funciones Generadas
function* nombreDeFuncionGenerada(parametros) {
    yield valor;
}

function* generadorID() {
    let id = 1;
    while (true) {
        yield id;
        id++;
    }
}

const gen = generadorID();
console.log(gen.next().value);
console.log(gen.next().value);

// Funciones Asíncronas
async function nombreDeLaFuncionAsincrona(parametros) {
    const resultado = await algunaPromesa;
    return resultado;
}

async function obtenerDatos() {
    const respuesta = await fetch('http://api.algo.com/v1/data');
    const datos = await respuesta.json();
    return datos;
}