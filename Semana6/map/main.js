

const map = new Map();

// insertar información

map.set(2, "Héctor");
map.set(9, "Ana");
map.set(11, "Juan");
map.set(1, "Pedro");

console.log(map);

// Modificar un valor

map.set(2, "Héctor Pérez");

// console.log(map);

// obtener un valor

// console.log(map.get(9));
// console.log(map.get(100));

// validar si existe

console.log(map.has(11));
console.log(map.has(100));

// eliminar un valor
map.delete(11);

// console.log(map);

const keyObject1 = { id: 1, hash: "abc" };
const keyObject2 = { id: 1, hash: "def" };
const keyObject3 = { id: 1, hash: "abc" };

map.set(keyObject1, "karla");
map.set(keyObject2, "Luisa");
console.log(map);

map.set(keyObject1, "Karla Pérez");
console.log(map);

// console.log(map.get(keyObject2));
// console.log(map.get(keyObject3));

// console.log(keyObject1 === keyObject3);

// meter de forma encadenada

map.set(20, "Hugo")
    .set(30, "Fracisco")
    .set(40, "Carlos");

// recorrido de la colección
for (let value of map.values()) {
    console.log(value);
}

for (let key of map.keys()) {
    console.log(key);
}

for (let item of map) {
    console.log(item);
}

//  eliminar todo

map.clear();
console.log(map);

// Ejemplo de uso -------------------------------------------------------------------

const textCode = document.getElementById("code");
const textCustomer = document.getElementById("customer");
const divContent = document.getElementById("content");

const customers = new Map();

function add(){
    customers.set(textCode.value, textCustomer.value)
    textCustomer.value = "";
    textCode.value = "";
    textCode.focus();

    show();
}

function show() {

    divContent.innerHTML = "";

    for (let item of customers) {
        divContent.innerHTML += `<div>
        <b>${item[0]}/b> ${item[1]}
        </div>`
    }
}