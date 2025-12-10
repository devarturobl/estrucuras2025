class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class queues {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  enQueue(value) {
    const newNode = new node(value);
    if (this.length == 0) {
      this.top = newNode;
      this.bottom = newNode;
      this.length++;
    } else {
      this.bottom.next = newNode;
      this.bottom = newNode;
      this.length++;
    }
  }
  deQueue() {
    this.top = this.top.next;
    this.length--;
  }
  peek() {
    return this.top;
  }
}
const myEnqueue = new queues();
myEnqueue.enQueue("Soy el nuevo enqueue");
myEnqueue.enQueue("Soy el segundo");
myEnqueue.enQueue("Soy el tercero");
myEnqueue.enQueue("Soy el cuarto");
console.log(myEnqueue);
myEnqueue.deQueue();
console.log(myEnqueue);
myEnqueue.peek();
