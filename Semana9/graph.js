/**
 *      2 - 0
 *     / \
 *    1 - 3
 */

class Graph{
    constructor(){
        this.nodos = 0;
        this.adjacentList = {}
    }

    addVertices(node){
        this.adjacentList[node] = [];
        this.nodos++;
    }

    addEdge(node1, node2){
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}

const myGraph = new Graph();
myGraph.addVertices("1");
console.log("Agrego nodo ", myGraph);
myGraph.addVertices("3");
console.log("Agrego nodo ", myGraph);
myGraph.addVertices("4");
console.log("Agrego nodo ", myGraph);
myGraph.addVertices("5");
console.log("Agrego nodo ", myGraph);
myGraph.addVertices("6");
console.log("Agrego nodo ", myGraph);
myGraph.addVertices("8");
console.log("Agrego nodo ", myGraph);

myGraph.addEdge("3","5");
myGraph.addEdge("6","3");
myGraph.addEdge("1","6");
myGraph.addEdge("1","3");
myGraph.addEdge("1","4");
myGraph.addEdge("4","5");
myGraph.addEdge("4","8");

console.log(myGraph);

