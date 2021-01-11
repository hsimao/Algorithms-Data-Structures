class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value && current.left) {
          current = current.left;
        } else if (value < current.value) {
          current.left = newNode;
          return this;
        } else if (value > current.value && current.right) {
          current = current.right;
        } else if (value > current.value) {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    return current;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(20);
tree.insert(12);
tree.insert(7);

console.log(tree.root.left.value === 5);
console.log(tree.root.left.right.value === 7);
console.log(tree.root.right.left.value === 12);
console.log(tree.root.right.value === 20);
console.log(tree);
console.log("find 5 ", tree.find(5).value === 5);
console.log("find 999 === null ", tree.find(999) === null);
