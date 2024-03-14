// Tipos de datos
// Number
let entero = 25;
let flotante = 2.71868;
console.log(entero, flotante);

// String
let programador = "Hola mundo!";
let programador2 = 'Hola mundo';
let template = `El valor del número entero es ${entero}, y del número flotante es ${flotante}.`;
console.log(template);

// Boolean
let verdadero = true;
let falso = false;
console.log(verdadero, falso);

// Undefined
let sinDefinir;
console.log(sinDefinir);

// BigInt
let numeroGrande = 123456789012345678890123;
console.log(numeroGrande);

//Symbol
let simbol1 = Symbol("id");
let simbol2 = Symbol("id");
console.log(simbol1 === simbol2);

// Objetos
let persona = {
    nombre: "Mi lista",
    edad: 22,
    esDeveloper: true
}

console.log(persona);

// Funciones
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Ricardo'));