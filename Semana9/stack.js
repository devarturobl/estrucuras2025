class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.lenght = null;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if(this.lenght === 0){
            this.top = newNode;
            this.bottom = newNode;
        } else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }

        this.lenght++;
        return this;
    }

    pop(){
        if(this.lenght === 0){
            return console.log("Pila vacia.");
        }else{
            const currentNode = this.top;

            const nextNode = this.top.next;

            this.top = nextNode;

            this.lenght--;

            return currentNode;
        }
    }
}


const myStack = new Stack();

console.log("my stack: ", myStack);

console.log("my stack: ", myStack.push(1));
console.log("my stack: ", myStack.push(2));
console.log("my stack: ", myStack.push(3));
console.log("PEEK:")
console.log("my stack: ", myStack.peek());
console.log("PEEK:")
console.log("my stack: ", myStack.peek());
console.log("my stack: ", myStack.pop());
console.log("PEEK:")
console.log("my stack: ", myStack.peek());