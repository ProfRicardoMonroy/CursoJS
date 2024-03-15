// Estructuras
let edad = 14;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Estás chavo todavía!")
}

let dia = 3;
switch (dia) {
    case 1: console.log("Es domingo");
        break;
    case 2: console.log("Es Lunes");
        break;
    case 3: console.log("Es martes");
        break;
    case 4: console.log("Es miercoles");
        break;
    case 5: console.log("Es jueves");
        break;
    case 6: console.log("Es viernes");
        break;
    case 7: console.log("Es sábado");
        break;
    default: console.log("No es ningún día");
}
console.log("Multiplicación por un for");
let tabla = 9;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabla} x ${i} = ${tabla * i}`);
}
console.log("Multiplicación por un while");
let contador = 1;
while (contador <= 10) {
    console.log(`${tabla} x ${contador} = ${tabla * contador}`);
    contador++;
}