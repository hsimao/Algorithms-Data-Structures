// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  // 全部過濾判斷方法, 效率較差
  // contains(data) {
  //   let array = [this];
  //   while (array.length) {
  //     const node = array.shift();
  //     if (node.data === data) {
  //       return node;
  //     } else {
  //       if (node.left) array.push(node.left);
  //       if (node.right) array.push(node.right);
  //     }
  //   }
  //   return null;
  // }

  // 依據資料大小, 只單純跑吻合的路線
  contains(data) {
    if (this.data === data) return this;

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;
