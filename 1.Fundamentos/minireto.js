// Crear una calculadora en JavaScript que realice operaciones básicas (suma, resta, multiplicación, división) y avanzadas (potencia y raíz cuadrada) utilizando diferentes tipos de funciones.
// Requisitos:
// 1.	Utiliza funciones declaradas para las operaciones básicas.
// 2.	Emplea funciones flecha para las operaciones avanzadas.
// 3.	La calculadora debe poder recibir dos números para las operaciones básicas y solo un número para las operaciones avanzadas (considerando la raíz cuadrada).
// 4.	Implementa una función para imprimir los resultados de cada operación.
// 5.	Sube tu mini reto a una carpeta con tu nombre en el repositorio del curso (https://github.com/ProfRicardoMonroy/CursoJS)
// 1.	Crea una carpeta con tu nombre
// 2.	Sube tu archivo JS

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    } else {
        return a / b;
    }
}

const potencia = (base, exponete) => base ** exponete;
const raizCuadrada = numero => Math.sqrt(numero);

function imprimirResultado(operacion, resultado) {
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}

let a = 8, b = 2;

imprimirResultado("suma", sumar(a, b));
imprimirResultado("resta", restar(a, b));
imprimirResultado("multiplicación", multiplicar(a, b));
imprimirResultado("división", dividir(a, b));
imprimirResultado("potencia", potencia(a, b));
imprimirResultado("raíz cuadrada", raizCuadrada(a));
imprimirResultado("raíz cuadrada", raizCuadrada(b));