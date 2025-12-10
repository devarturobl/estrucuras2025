// /implementación de cola

class Queue {
    #items = [];

    enqueue(item) {
        this.#items.push(item);
    }

    dequeue() {
        return this.#items.shift();
    }

    isEmpty() {
        return this.#items.length === 0;
    }

    peek() {
        return this.#items[0];
    }

    size() {
        return this.#items.length;
    }

    getItems() {
        return [...this.#items];
    }
}


const queue = new Queue();
queue.enqueue("Pedro");
queue.enqueue("Juan");
queue.enqueue("Héctor");
// console.log(queue.peek());
queue.dequeue();
// console.log(queue.peek());

// Ejemplo con Html

const queueRequests = new Queue();

const divReq = document.getElementById("req");
const divResult = document.getElementById("result");

const url = "https://jsonplaceholder.typicode.com/posts";

let i = 1;

function add() {
    queueRequests.enqueue(i++);
    showReq();
}

async function request() {
    while (!queueRequests.isEmpty()) {
        const res = await fetch(url + "/" + queueRequests.dequeue())
        const data = await res.json();
        await new Promise(r => setTimeout(r, 1000));
        showReq();
        divResult.innerHTML = `<p>${data.id} ${data.title}</p>` + divResult.innerHTML;
    }
}

function showReq() {
    const items = queueRequests.getItems();

    if (items.length === 0) {
        divReq.innerHTML = "Sin solicitudes";
        return;
    }

    divReq.innerHTML = "";

    items.forEach((item) => { divReq.innerHTML += `${item} | ` })
}