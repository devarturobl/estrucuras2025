// Implementación de una lista doblemente enlazada

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value) {
        this.length++;
        const node = new Node(value);

        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }

    reverse() {
        let current = this.tail;

        console.log("------------Reverse-----------------");
        console.log(`Cabeza ${this.head?.value}`);
        console.log(`Cola ${this.tail?.value}`);

        while (current !== null) {
            console.log(`valor: ${current.value}
                siguente: ${current.next?.value}
                anterior: ${current.prev?.value}`);
            current = current.prev;
        }
    }


    show() {
        let current = this.head;

        console.log("------------------------------------");
        console.log(`Cabeza ${this.head?.value}`);
        console.log(`Cola ${this.tail?.value}`);

        while (current !== null) {
            console.log(`valor: ${current.value}
                siguente: ${current.next?.value}
                anterior: ${current.prev?.value}`);
            current = current.next;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    delete(value) {
        if (this.length === 0) return;
        if (this.head.value === value) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }

            this.length--;
        } else if (this.tail.value === value) {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        } else {
            let current = this.head;

            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    current.next.prev = current;

                    this.length--;
                    break;
                }
                current = current.next;
            }
        }

    }
}

const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.show();
list.reverse();
list.delete(3);
list.show();

// Ejemplo de uso de la lista doblemente enlazada

const title = document.getElementById('title');
const image = document.getElementById('image');
const divInfo = document.getElementById('info');

const moviesLinkedList = new DoublyLinkedList();
moviesLinkedList.add({
    name: 'Spiderman',
    picture: 'images/spiderman.jpg'
});
moviesLinkedList.add({
    name: 'Titanic',
    picture: 'images/titanic.jpg'
});
moviesLinkedList.add({
    name: 'El señor de los anillos',
    picture: 'images/lotr.jpg'
});

let movie = moviesLinkedList.head;

function showMovie() {
    title.innerHTML = movie.value.name;
    image.src = movie.value.picture;

    const movieNext = movie.next?.value;
    const moviePrev = movie.prev?.value;

    divInfo.innerHTML = (moviePrev ? 'Anterior: ' + moviePrev.name : 'no hay anterior');
    divInfo.innerHTML += (movieNext ? ' | Siguiente: ' + movieNext.name : '| no hay pelicula siguiente');
}

function nextMovie() {
    if (movie.next) {
        movie = movie.next;
        showMovie();
    }
}

function prevMovie() {
    if (movie.prev) {
        movie = movie.prev;
        showMovie();
    }
}

showMovie();