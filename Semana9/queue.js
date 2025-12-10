class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.lenght = 0
    }

    peek(){
        return this.first;
    }

    enqueue(value){
        const newNode = new Node(value);

        if(this.lenght === 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }

        this.lenght++;
        return this;
    }

    dequeue(){
        
        if(this.lenght === 0){
            return console.log("El Queue esta vacio.")
        }else{
            const peekNode = this.first;
            this.first = peekNode.next;

            this.lenght--;

            return this;
        }
    }
}

const myQueue = new Queue();

console.log(myQueue);

console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));
console.log(myQueue.enqueue(4));

console.log(myQueue.peek());
console.log(myQueue.dequeue());
console.log(myQueue.peek());
