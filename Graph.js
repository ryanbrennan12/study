//https://medium.com/@ziyoshams/graphs-in-javascript-cc0ed170b156
class Graph {
  constructor() {
    this.adj = new Map();
  }
}

Graph.prototype.addVertex = function(vertex) {
  if (!this.adj.has(vertex)) {
    this.adj.set(vertex, []);
  } else {
    console.log('Already Exists!')
  }
}

Graph.prototype.addEdge = function(vertex, node) {
    if (!!this.adj.has(vertex)) {
      if (!!this.adj.has(node)) {
      const list = this.adj.get(vertex);
      list.push(node);
      this.adj.set(vertex, list);
      }
    }
}

  const graph = new Graph();
let arr = 'ABCDEF'.split('');

arr.forEach((vertex) =>{
  graph.addVertex(vertex);
});

graph.addEdge('A', 'B');
graph.addEdge('A', 'D');
graph.addEdge('A', 'E');
graph.addEdge('B', 'C');
graph.addEdge('D', 'E');
graph.addEdge('E', 'F');
graph.addEdge('E', 'C');
graph.addEdge('C', 'F');
console.log(graph);

// BFS in Graphs is almost the same as in Binary Search Tree, but there is a little difference. The main difference is that you can have loops in Graphs.
//  You have to keep track of the nodes that you visit. Here is how you do it:
// BFS gets a starting node as an argument. (e.g 'A' )
// initialize an empty object called visited .
// initialize an empty array called q which will be used as a Queue.
// mark the starting node as visited. ( visited = {'A': true} )
// put the starting node in the queue. ( q = ['A'] )
// loop until queue is empty
// Inside the loop: