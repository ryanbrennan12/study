class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

BinarySearchTree.prototype.insert = function (data) {
  const newNode = new Node(data);
  if (!this.root) {
    this.root = newNode;
  } else {
    this.insertNode(this.root, newNode);
  }
}

BinarySearchTree.prototype.insertNode = function (node, newNode) {
  if (!node.left && newNode.val < node.val) {
    node.left = newNode;
  } else if (!!node.left && newNode.val < node.val) {
    //passing it down
    this.insertNode(node.left, newNode);
  } else if (!node.right && newNode.val > node.val) {
    //passing it down
    node.right = newNode;
  } else {
    this.insertNode(node.right, newNode);
  }
}

BinarySearchTree.prototype.contains = function (val, current) {
  //this is so you don't have to invoke with an argument
  let currentNode = current || this.root;

  if (currentNode.val === val) {
    return true;
  } else if (!!currentNode.left && val < currentNode.val) {
    return this.contains(val, currentNode.left);
  } else if (!!currentNode.right && val > currentNode.val) {
    return this.contains(val, currentNode.right);
  }
  return false
}

BinarySearchTree.prototype.preOrderTraversal = function (opr) {
  const stack = [];
  let current = this.root;
  const results = [];

  while (true) {

    while (current) {
      results.push(current.val);
      stack.push(current);
      current = current.left;
    }
    if (!stack.length) break;
    const popped = stack.pop();
    current = popped.right;
  }

  return results;
}
BinarySearchTree.prototype.postOrderTraversal = function () {

}



BinarySearchTree.prototype.inOrderTraversal = function () {
  const callStack = [];
  let current = this.root;
  const result = [];

  while (true) {

    while (!!current) {
      callStack.push(current);
      current = current.left;
    }
    //now stack is full w/no more left to go
    //se grap the node at the top of the stack
    if (callStack.length === 0) break;

    let topNode = callStack.pop();
    result.push(topNode.val);
    current = topNode.right;
    //this current is going to be null at the end which breaks our loop
  }

  return result;
}

BinarySearchTree.prototype.breadthFirstSearch = function () {
  const queue = [this.root];
  const results = [];

  while (queue.length < 2) {

    queue.forEach((current) => {
      results.push(current.val);
      if (!!current.left && !!current.right) {
        queue.push(current.left);
        queue.shift();
      }
    })
  }


  return results;
}
BinarySearchTree.prototype.findKsmallest = function (k) {

  let depthArray = this.inOrderDfs();
  const root = depthArray[0];
  const kSmallest = depthArray[k - 1];


  return Math.min(root, kSmallest);
}



const tree = new BinarySearchTree();
tree.insert(8);
tree.insert(4);
tree.insert(12);
tree.insert(3);
tree.insert(6);
tree.insert(9);
tree.insert(15);
console.log(tree)
tree.breadthFirstSearch()
// tree.inOrderTraversal();
// tree.preOrderTraversal();
