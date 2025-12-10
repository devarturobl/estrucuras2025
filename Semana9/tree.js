/**
 *         10
 *    4        20
 *  2   8   17  170
 */


class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value);

        if(this.root === null){
            this.root = newNode;
        }else{
            let currentNode = this.root;

            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.left;
                    }
                }else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    
    search(value){
        if(!this.root){
            console.log("El Tree esta vacio..");
            return null;
        }else{
            let currentNode = this.root;

            while(currentNode){
                if(currentNode.value === value){
                    console.log("Nodo encontrado: ",currentNode);
                    return currentNode;
                }else{
                    if(value < currentNode.value){
                        currentNode = currentNode.left;
                    }else{
                        currentNode = currentNode.right;
                    }
                }
            }
            console.log("No encontrado");
            return null;
        }
    }
}

const myBinaryTree = new BinarySearchTree();

console.log("Ante de iniciar: ", myBinaryTree);

console.log("Agregando elemento 10");
myBinaryTree.insert(10);
console.log("Se agrego 10: ", myBinaryTree);

console.log("Agregando elemento 4");
myBinaryTree.insert(4);
console.log("Se agrego 4: ", myBinaryTree);

console.log("Agregarndo elemento 20");
myBinaryTree.insert(20);
console.log("Se agrego 20: ", myBinaryTree);

console.log("Agregarndo elemento 2");
myBinaryTree.insert(2);
console.log("Se agrego 2: ", myBinaryTree);

console.log("Agregarndo elemento 8");
myBinaryTree.insert(8);
console.log("Se agrego 8: ", myBinaryTree);

console.log("Agregarndo elemento 17");
myBinaryTree.insert(17);
console.log("Se agrego 17: ", myBinaryTree);

console.log("Agregarndo elemento 170");
myBinaryTree.insert(170);
console.log("Se agrego 170: ", myBinaryTree);

console.log("Buscamos elemento inexistente");
myBinaryTree.search(6);

console.log("Buscamos elemento 170");
myBinaryTree.search(170);

console.log("Buscamos elemento 4");
myBinaryTree.search(4);
