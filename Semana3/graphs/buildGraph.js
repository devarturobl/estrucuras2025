class nodo {
  constructor(value) {
    this.value = value;
  }
}
class graph {
  constructor() {
    this.nodes = 0;
    this.adjancentList = {};
  }
  addVertex(node) {
    this.adjancentList[node] = [];
    this.nodes++;
  }
  addEdge(node1, node2) {
    this.adjancentList[node1].push(node2);
    this.adjancentList[node2].push(node1);
  }
}

const myGraph = new graph();
myGraph.addVertex("1");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addVertex("8");
myGraph.addEdge("1", "6");
myGraph.addEdge("6", "3");
myGraph.addEdge("3", "5");
myGraph.addEdge("4", "5");
myGraph.addEdge("4", "1");
myGraph.addEdge("4", "8");
myGraph.addEdge("3", "1");
console.log(myGraph);
