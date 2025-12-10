class Graph {

    constructor() {
        this.nodes = new Map();
    }

    addNode(value) {
        const node = new Node(value);
        this.nodes.set(value, node);
    }

    addEdge(startValueNode, endValueNode) {
        const startNode = this.nodes.get(startValueNode);
        const endNode = this.nodes.get(endValueNode);

        if (startNode && endNode) {
            startNode.addEdge(endNode);
        }
    }

    show(){
        for(const node of this.nodes.values()){
            const edges = node.edges.map(edge => edge.value).join();
            console.log(`${node.value} -> ${edges}`);
        }
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.edges = [];
    }
    addEdge(node) {
        this.edges.push(node);
    }
}

const graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.addEdge('D', 'A');

graph.show();