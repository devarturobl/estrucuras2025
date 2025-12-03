/*
//Desclaracion de variable global
let x = 10;

function incrementX() {
    let y = 100; // Variable local 
    x += 1;
}

console.log("Before increment:", x);

incrementX();

console.log("After increment:", x); 

determinaValor(10);

// Intentando acceder a la variable local y fuera de su alcance error
//console.log("Accessing local variable y:", y);

function determinaValor(num){
    let mensaje;
    if(num > 0 && num <= 10){
        mensaje = "El número es una unidad";
    }else if(num >= 10 && num <= 100){
        mensaje = "El número es una decena";
    }else if(num >= 100 && num <= 1000){
        mensaje = "El número es una centena";
    }else if(num >= 1000 && num <= 10000){
        mensaje = "El número es un millar";
    }else if(num >= 10000 && num <= 100000){
        mensaje = "El número es una decena de millar";
    }else{
        mensaje = "Número fuera de rango";
    }
    return console.log(mensaje);
}

determinaValor(500000);

function testScope(nun1){
    //nun1 > 10 ? console.log("Número mayor a 10") : console.log("Número menor o igual a 10");
    nun1 != null ? console.log("Tiene valor") : console.log("No tiene valor");
}

testScope();

function respuesta(mirespuesta){
    switch(mirespuesta){
        case "a":
            console.log("Respuesta A");
            break;
        case "b":
            console.log("Respuesta B");
            break;
        case "c":
            console.log("Respuesta C");
            break;
        default:
            console.log("Respuesta no válida");
            break;    
    }
}

respuesta();

// ===== Conversor de números a palabras en español (0..1,000,000) =====
function numberToSpanish(n) {
    if (typeof n !== 'number' || !Number.isFinite(n) || Math.floor(n) !== n) return null;
    if (n < 0 || n > 1000000) return null;
    if (n === 0) return 'Cero';
    if (n === 1000000) return 'Un millón';

    const units = [
        'cero','uno','dos','tres','cuatro','cinco','seis','siete','ocho','nueve',
        'diez','once','doce','trece','catorce','quince','dieciséis','diecisiete','dieciocho','diecinueve',
        'veinte','veintiuno','veintidós','veintitrés','veinticuatro','veinticinco','veintiséis','veintisiete','veintiocho','veintinueve'
    ];
    const tens = {
        30: 'treinta', 40: 'cuarenta', 50: 'cincuenta', 60: 'sesenta', 70: 'setenta', 80: 'ochenta', 90: 'noventa'
    };
    const hundreds = {
        100: 'cien', // exacto
        200: 'doscientos', 300: 'trescientos', 400: 'cuatrocientos', 500: 'quinientos',
        600: 'seiscientos', 700: 'setecientos', 800: 'ochocientos', 900: 'novecientos'
    };

    function belowThousand(num) {
        let result = '';
        if (num === 0) return '';
        if (num < 30) return units[num];
        if (num < 100) {
            const t = Math.floor(num / 10) * 10;
            const u = num % 10;
            if (u === 0) return tens[t];
            return tens[t] + ' y ' + units[u];
        }
        // 100..999
        const h = Math.floor(num / 100) * 100;
        const rest = num % 100;
        if (num === 100) return 'cien';
        if (h === 100) result = 'ciento';
        else result = hundreds[h];
        if (rest === 0) return result;
        return result + ' ' + belowThousand(rest);
    }

    let words = '';
    // miles
    const thousands = Math.floor(n / 1000);
    const remainder = n % 1000;
    if (thousands > 0) {
        if (thousands === 1) words = 'mil';
        else words = belowThousand(thousands) + ' mil';
    }
    if (remainder > 0) {
        if (words) words += ' ' + belowThousand(remainder);
        else words = belowThousand(remainder);
    }

    // Capitalizar primera letra
    return console.log(words.charAt(0).toUpperCase() + words.slice(1));
}


numberToSpanish(1002);




function suma(a, b) {
    return a + b;
}

let resultado = suma(5, 7);
console.log("Resultado de la suma:", resultado);

function suma2(a, b) {
    console.log("Sumando:", a, "+", b, "=" , a + b);
}

suma2(3, 4);

function muestraFunciones() {
    let a2 = suma(8, 12);
    console.log("Resultado dentro de muestraFunciones:", a2);
    suma2(6, 9);
}

muestraFunciones();




function myFunction() {
    this.value = 42;
    this.saludo = "Hola Mundo";
    this.cantidad = 100;
}

myObject = new myFunction();


console.log(myObject.value, myObject.saludo, myObject.cantidad);
    

function myFunction2(value, saludo, cantidad) {
    {
        this.value,
        this.saludo,
        this.cantidad
    }

    this.value = value;
    this.saludo = saludo;
    this.cantidad = cantidad;
}

myObject2 = new myFunction2(33, "Hola Universo", 200);

console.log(myObject2.value, myObject2.saludo, myObject2.cantidad);


*/

function MyFunction( myArgument ) {
    this.myValue = myArgument;
    this.doubleMyValue = () => myArgument * 2;
}
const myObject = new MyFunction("50");

console.log( myObject.myValue ); // 10
console.log( myObject.doubleMyValue() ); // 20  

class MisMates{
    suma(a, b){
        return a + b;
    }

    resta(a, b){
        return a - b;
    }   
    
    divsion(a, b){
        return a / b;
    }       

    multiplicacion(a, b){
        return a * b;
    }           
}

const mate = new MisMates();

console.log("Suma:", mate.suma(10, 5));
console.log("Resta:", mate.resta(10, 5));
console.log("División:", mate.divsion(10, 5));
console.log("Multiplicación:", mate.multiplicacion(10, 5));



function MisMates2(){
    this.suma = (a, b) =>{
        return a + b;
    }

    this.resta = (a, b) =>{
        return a - b;
    }   
    
    this.divsion = (a, b) =>{
        return a / b;
    }       

    this.multiplicacion = (a, b) =>{
        return a * b;
    }           
}

const mate2 = new MisMates2();

console.log("Suma:", mate2.suma(10, 10));
console.log("Resta:", mate2.resta(1000, 50));
console.log("División:", mate2.divsion(10, 2));
console.log("Multiplicación:", mate2.multiplicacion(100, 500));