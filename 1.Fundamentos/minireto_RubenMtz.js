const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const potenciar = (a, b) => a ** b;
const modulo = (a, b) => a % b;
const division = (a, b) => a / b;
const raizCuadrada = (a) => Math.sqrt(a);

function calcular(operacion, a, b) {
    switch (operacion) {
        case 'sumar':
            return sumar(a, b);
        case 'restar':
            return restar(a, b);
        case 'multiplicar':
            return multiplicar(a, b);
        case 'division':
            if (b !== 0) {
                return division(a, b);
            } else {
                console.log('No se puede dividir por 0');
            }
            break;
        case 'modulo':
            if (b !== 0) {
                return modulo(a, b);
            } else {
                console.log('No se puede dividir por 0');
            }
            break;
        case 'potenciar':
            return potenciar(a, b);
        case 'raizCuadrada':
            return raizCuadrada(a);

        default:
            break;
    }
}

const a = 5;
const b = 3;

console.log(`Suma de ${a} + ${b} = `, calcular('sumar', a, b));
console.log(`Resta de ${a} - ${b} = `, calcular('restar', a, b));
console.log(`Multiplicacion de ${a} x ${b} = `, calcular('multiplicar', a, b));
console.log(`Potencia de ${a} a la ${b} = `, calcular('division', a, b));
console.log(`El residuo de ${a} / ${b} = `, calcular('modulo', a, b));
console.log(`Division de ${a} / ${b} = `, calcular('potenciar', a, b));
console.log(`Raiz cuadrada de ${a} = `, calcular('raizCuadrada', a, 0));
