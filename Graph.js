// https://medium.com/@ziyoshams/graphs-in-javascript-cc0ed170b156
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
///review this loop and how it pertains to map
Graph.prototype.createVisitedObject = function() {
  const obj = {};

  for (let key of this.adj.keys()) {
    obj[key] = false;

  }
  return obj;
}
//YOU PICK STARTING NODE
Graph.prototype.breadthFirstSearch = function(startingNode) {
  let visited = this.createVisitedObject();
  //1) Enque theFirst Node
  let queue = [startingNode];


  const results = [];
  visited[startingNode] = true;

  while(queue.length) {
    //2) dequewed
    let current = queue.pop();
    //3) write /cb
    results.push(current);
   //4grab edges
    //5)go through edges
    //6 set unvisited to true
    let edgesArray = this.adj.get(current);

    edgesArray.forEach((vertex) => {
      //BALLER if statement
      if (!visited[vertex]) {
        visited[vertex] = true;
        //ADDING to the queue
        queue.unshift(vertex)
      }
    })
  }

  return results;
}
//think about

Graph.prototype.testBread = function(startingNode) {
  let visited = this.createVisitedObject();
  //enqueu the first
  const queue = [startingNode];
  const results = [];

  visited[startingNode] = true;

  while(queue.length) {
    //dequeue the first
    let popped = queue.popped();
    //now we write
    results.push(popped);
    //now we get the edges
    const edges = this.adj.get(popped);
    edges.forEach((vertex) => {
      //we go across (Breadth) the whole array and set them to true. 7:35
      if (!visited[vertex]) {
        visited[vertex] = true;
        //add to the front of the queue??

      }
    });
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
// graph.createVisitedObject();
// graph.breadthFirstSearch('A');
graph.testBread('A')