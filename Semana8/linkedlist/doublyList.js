// Estructura de un singly linked list
let doublyLinked = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
        // Null para permitir que halla otro
      },
    },
  },
};

class Nodes {
  constructor(value) {
    // nodo tiene valor
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class myDoublyLinkedList {
  //value es para iniciar con una cabeza
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    // Solo apunta a la cabeza
    this.tail = this.head;
    this.length = 1;
  }
  add(value) {
    /* creamos un nodo con la clase y
                le pasamo el parametro*/
    let currentNode = new Nodes(value);
    currentNode.prev = this.tail;
    // Metemos ese nodo en la cola
    this.tail.next = currentNode;
    /* Y hacemos que también sea la 
                nueva cola*/
    this.tail = currentNode;
    // Aumentamos el tamaño de la list
    this.length++;

    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.add(value);
    }
    // Hacemos nuevo nodo
    const newNode = new Nodes(value);
    const currentNode = this.getTheIndex(index);
    const previousNode = this.getTheIndex(index - 1);
    previousNode.next = newNode;
    newNode.prev = previousNode;
    newNode.next = currentNode;
    currentNode.prev = newNode;
    this.length++;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter != index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const nodoTraslated = this.getTheIndex(index + 1);
    const nodoReceptor = this.getTheIndex(index - 1);
    nodoReceptor.next = nodoTraslated;
    nodoTraslated.prev = nodoReceptor;
    this.length--;
  }
  search() {
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      if (currentNode) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

// La estancia
let myList = new myDoublyLinkedList("Nodo numero cero");
myList.add("Primer nodo");
myList.add("Segundo nodo");
myList.add("Tercer nodo");
myList.add("Cuarto nodo");
myList.search();
