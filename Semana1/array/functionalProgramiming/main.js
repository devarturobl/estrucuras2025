// funcion de primera clase

function hi() {
    console.log("hola");
}

// función guardada en variable
const h = hi;

// ejecución de funcion

h();

// función de primera clase con parametros

function sum(a, b) {
    return a + b;
}

const s = sum;

console.log(s(2, 3));

// Funcion de orden superior
function some(fn) {
    console.log("se hace algo antes");

    fn();

    console.log("se hace algo después");
}

some(h);


// función de orden superior ejecuta función con parametros

function some2(fn, num1, num2) {
    console.log("se hace algo antes");

    const res = fn(num1, num2);

    console.log("El resultado es: ", res);
}

some2(s, 2, 3);

some2(function (a, b) {
    return a * b;
}, 6, 2);

// arrow function

some2((a, b) => {
    return a * b;
}, 10, 20);

some2((a, b) => a * b, 3, 5);