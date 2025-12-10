class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class MySinglyLinkedList {
    constructor(value){
        this.head ={
            value: value,
            next: null
        }

        this.tail = this.head;

        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;

        this.length++;

        return this

    }

    prepend(value){
        const currentHead = this.head;
        const newNode = new Node(value);
        this.head = newNode;

        this.head.next = currentHead;

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

        this.length++;

        return this;

    }

    remove(index){
        const previousPointer = this.getTheIndex(index - 1);
        const holdingPointer = this.getTheIndex(index + 1);

        previousPointer.next = holdingPointer;
            
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

let mySinglyLinkedList = new MySinglyLinkedList(1);
console.log(mySinglyLinkedList);
//Agrega un nuevo nodo
console.log("===== Agrega nodo al final===== ");
mySinglyLinkedList.append(2);
console.log(mySinglyLinkedList);
//Agrega un nodo al inicio
console.log("===== Agrega nodo al inicio===== ");
mySinglyLinkedList.prepend(0);
console.log(mySinglyLinkedList);

//Agrega un nodo en N
console.log("===== Agrega nodo en N===== ");
mySinglyLinkedList.insert(1,"Jorge");
console.log(mySinglyLinkedList);

console.log("===== Elimina nodo en N===== ");
mySinglyLinkedList.remove(2);
console.log(mySinglyLinkedList);

