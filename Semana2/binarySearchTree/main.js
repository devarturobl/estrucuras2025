

class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value);

        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;

        while (true) {
            if (value === current.value) break;

            if (value < current.value) {

                if (current.left === null) {
                    current.left = node;
                    break;
                }

                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = node;
                    break;
                }

                current = current.right;
            }

        }
    }

    search(value) {
        if (this.root === null) return false;

        let current = this.root;

        // let i = 0;
        while (current) {
            // console.log(++i);
            if (value === current.value) return current;

            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }

        return false;
    }

    // Recorridos

    showInOrder(node) {


        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {

            this.showInOrder(node.left);

            // console.log(node.value);

            this.showInOrder(node.right);

        }
    }

    showInPreOrder(node) {
        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {
            console.log(node.value);
            this.showInPreOrder(node.left);
            this.showInPreOrder(node.right);
        }
    }

    showInPostOrder(node) {
        if (node === undefined) {
            node = this.root;
        }

        if (node !== null) {

            this.showInPostOrder(node.left);
            this.showInPostOrder(node.right);
            console.log(node.value);
        }
    }


}

// Recursividad

function recursiveShowMessage(n) {

    if (n === 0) return;

    // console.log("mensaje " + n);
    // console.log("numero en pila: " + n);

    recursiveShowMessage(n - 1);

    // console.log("mensaje " + n);

}

recursiveShowMessage(5);

// uso del árbol binario de búsqueda

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(9);
tree.insert(1);
tree.insert(10);
tree.insert(11);
tree.insert(8);
tree.insert(4);
tree.insert(3);

// console.log(tree);
// console.log(tree.search(11));

// tree.showInOrder();
// tree.showInPreOrder();
// tree.showInPostOrder();


// Ejemplo de Árbol binario de Búsqueda -----------------------------------


const treeNumbers = new BinarySearchTree();

let json = [];

for (let i = 0; i < 1000000; i++) {
    const number = Math.floor(Math.random() * 1000000);
    json.push(number);
    treeNumbers.insert(number);
}

console.log(json);

const numberToSearch = 3;

// búsqueda lineal

let exists = false;

const start = Date.now();

for (let n of json) {
    if (n === numberToSearch) {
        exists = true;
        break;
    }
}

const end = Date.now();

if (exists) {
    console.log("Número existente en Búsqueda Lineal");
} else {
    console.log("Número NO existe en Búsqueda Lineal");
}

console.log(`Tiempo de ejecución en búsqueda lineal: ${end - start} ms`);

// busqueda en árbol binario de busqueda

const startTree = Date.now();

if(treeNumbers.search(numberToSearch)){
    console.log("Número existente en Árbol");
}else{
    console.log("Número No existente en Arbol");
}


const endTree = Date.now();

console.log(`Tiempo de ejecución en búsqueda en árbol binario de búsqueda: ${endTree - startTree} ms`);