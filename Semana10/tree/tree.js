class node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  search(value, tree = this.root) {
    let direccion = [];
    if (tree == null) {
      return "El elemento no se encuentra.";
    } else if (value > tree.value) {
      console.log("fui a la derecha ");
      return this.search(value, tree.right);
    } else if (value < tree.value) {
      console.log("fui a la izquierda");
      return this.search(value, tree.left);
    } else {
      console.log(tree);
    }
  }
}

const tree = new binarySearchTree();
tree.insert(10);
tree.insert(8);
tree.insert(7);
tree.insert(9);
tree.insert(12);
tree.insert(11);
tree.insert(14);

// console.log(tree)
tree.search(9);
