class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class MyDoubleLinkedList {
    constructor(value){
        this.head ={
            value: value,
            next: null,
            prev: null,
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this

    }

    prepend(value){
        const currentHead = this.head;
        const newNode = new Node(value);
        currentHead.prev = newNode;
        newNode.next = currentHead;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index, value){
        if(index>= this.length){
            return this.append(value);
        }

        if(index == 0){
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const fisrtPointer = this.getTheIndex(index -1);
        const holdingPointer = fisrtPointer.next;

        fisrtPointer.next = newNode;
        newNode.next = holdingPointer;
        newNode.prev = fisrtPointer;
        holdingPointer.prev = newNode;

        this.length++;

        return this;

    }

    remove(index){
        const previousPointer = this.getTheIndex(index - 1);
        const holdingPointer = this.getTheIndex(index + 1);

        previousPointer.next = holdingPointer;
        holdingPointer.prev = previousPointer;
            
        this.length--;

        return this;

    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            console.log("Node actual:" + currentNode + "COUNTER: "+ counter + " INDEX: " + index);
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }
}

let mydoublylinkedList = new MyDoubleLinkedList(3);
console.log(mydoublylinkedList);

console.log("===== Agrega nodo al final===== ");
mydoublylinkedList.append(10);
console.log(mydoublylinkedList);