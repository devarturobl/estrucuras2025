class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // el actual nodo es el top
      const currentNode = this.top;
      // el top pasa a ser el nuevo nodo que se mete
      this.top = newNode;
      //el top.next será el actual nodo para que entren más
      this.top.next = currentNode;
    }
    this.length++;
    return this;
  }
  pop() {
    const borrado = this.top;
    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new stack();
myStack.push("Soy la base del stack");
myStack.push("Soy la el que le sigue de la base");
myStack.push("Soy el que después será borrado");
console.log(myStack);
