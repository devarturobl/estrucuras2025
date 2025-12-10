class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {

        if (index >= this.length) {
            return this.append(value);
        }

        if (index === 1) {
            return this.prepend(value);
        }

        const newNode = Node(value);
        const prevPointer = this.getTheIndex(index - 1);
        const nextPointer = this.getTheIndex(index + 1);

        newNode.prev = prevPointer;
        newNode.next = nextPointer;

        nextPointer.prev = newNode;
        prevPointer.next = newNode;

        this.length++;
        return this;

    }

    remove(index) {

        if (index >= this.length) {
            console.log("El indice no existe")
            return
        }

        if (index === 0) {
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return this;
        }

        const prevNode = this.getTheIndex(index - 1);
        const nextNode = this.getTheIndex(index + 1);

        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        this.length--;
        return this;

    }

    getTheIndex(index) {
        let counter = 0;
        let currentNode = this.head;

        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

}

let myLinkedList = new MyDoublyLinkedList(1);