

const suma = (a,b) =>{
    console.log(a +b);
};


const resta = (a,b) =>{
    console.log(a -b);
};

const division =  (a,b) =>{
    if(b === 0){
        return "no se puede dividir por cero"
    }else{
        return a / b
    }
    
};

const multiplicacion = (a,b) =>{

        return a * b    
};

const potencia =(a) =>{
  return a**2;
};

const raiz = (a) =>{
  return Math.sqrt(a);  
};

function imprimirResultado(operacion, resultado){
    console.log(`el resultado de la ${operacion} es: ${resultado}`);
}

let a = 5, b = 3;

imprimirResultado("suma",suma(a,b));
imprimirResultado("resta",resta(a,b));
imprimirResultado("multiplicacion",multiplicacion(a,b));
imprimirResultado("division",division(a,b));
imprimirResultado("potencia",potencia(a));
imprimirResultado("raiz",raiz(a));
