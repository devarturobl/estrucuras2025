class Nodes {
  constructor(value) {
    // nodo tiene valor
    this.value = value;
    this.next = null;
  }
}

class myDoublyLinkedList {
  //value es para iniciar con una cabeza
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    // Solo apunta a la cabeza
    this.tail = this.head;
    this.length = 1;
  }
}
