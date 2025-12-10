// Implementación de pila

class Stack {

    #items = [];

    push(item) {
        this.#items.push(item);
    }

    pop() {
        return this.#items.pop();
    }

    peek() {
        return this.#items[this.#items.length - 1];
    }

    size() {
        return this.#items.length;
    }
    isEmpty() {
        return this.#items.length === 0;
    }

    getItems() {
        return [...this.#items];
    }
}


const stack = new Stack();
console.log(stack.isEmpty());
stack.push("Pedro");
stack.push("Juan");
stack.push("Héctor");
console.log(stack);
console.log(stack.peek());
console.log(stack);
console.log(stack.size());
console.log(stack.isEmpty());

// while (!stack.isEmpty()){
//     console.log(stack.pop());
// }

const items = stack.getItems();
items.push("Pato");
console.log(stack);
console.log(items);

// ejemplo con HTML
const inputName = document.getElementById("name");
const divContent = document.getElementById("content");

const stackNames = new Stack();

function addToStack() {
    stackNames.push(inputName.value);
    showNames();
    inputName.value = "";
    inputName.focus();
}

function deleteToStack() {
    stackNames.pop();
    showNames();
}

function showNames() {
    const items = stackNames.getItems();
    divContent.innerHTML = "";

    items.forEach((item) => { divContent.innerHTML += `<p>${item}</p>` })
}