const tree = {
  a: 1,
  b: 1,
  c: {
    c1: 1,
    c2: 1
  }
}


const bst = (root) => {
  const queue = [root];
  let compare;

  while (queue.length) {
    let popped = queue.pop();
    //popped is an object.  Iterate through;
    for (var key in popped) {
      const nodeVal = popped[key]
      if (!compare) compare = nodeVal;
      if (typeof nodeVal === 'number' && nodeVal !== compare) {
        return false;
      } else if (typeof nodeVal === 'object') {
        queue.unshift(nodeVal);
      }
    }
  }
  return true
}

// console.log(bst(tree))