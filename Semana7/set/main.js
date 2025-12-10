// SET

// no se repiten los elementos

const set = new Set();

set.add(5);
set.add(1);
set.add(8);

console.log(set);

set.add(1);
set.add(10);

console.log(set);

set.add({ "name": "Juan" });
set.add({ "name": "Juan" });

console.log(set);

const people = { "name": "Héctor" };

set.add(people);
set.add(people);

console.log(set);

// eliminar
set.delete(people);
set.delete({ "name": "Juan" });
set.delete(8);

console.log(set);

// existencia

const book = { "name": "El Señor de los anillos" };

set.add(book);

if (set.has(1)) {
    console.log("Existe el 1");
}
if (set.has({ "name": "El señor de los anillos" })) {
    console.log("Existe el libro buscado por valor");
}
if (set.has(book)) {
    console.log("Existe el libre buscado por referencia");
}

// array en set

const array = [5, 4, 3, 2, 1, 2, 3, 4, 5];

const set2 = new Set(array);

console.log(set2);

// recorridos de set

for (const item of set) {
    console.log(item);
}
// limpiar set
set.clear();
console.log(set);

// Ejemplo de uso de SET ------------------------------------------------------------


const functions = new Set();

function addAction(fn) {
    functions.add(fn);
    console.log(functions);
}

function action1() {
    console.log("Action 1");
}

function action2() {
    console.log("Action 2");
}



function action3() {
    console.log("Action 3");
}

function action4() {
    console.log("Action 4");
}

function run() {
    for (const fn of functions) {
        fn();
    }
}