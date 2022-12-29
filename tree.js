class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

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
    return this;
  }

  search(value) {
    let currentNode = this.root;
    while (true) {
      if (currentNode === null) return false;
      if (currentNode.value === value) return true;
      if (currentNode.value > value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

const myTree = new BinarySearchTree();

myTree.insert(10);
myTree.insert(20);
myTree.insert(5);
myTree.insert(2);
myTree.insert(8);
myTree.insert(3);
myTree.insert(18);
myTree.insert(24);
console.log(myTree.root);

console.log(myTree.search(3));
