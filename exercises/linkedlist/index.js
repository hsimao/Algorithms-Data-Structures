// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constrructor() {
    this.head = null;
    this.count = 0;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;
    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      return (last.next = new Node(data));
    }
    this.head = new Node(data);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) return (this.head = null);

    let node = this.head.next;
    let prevNode = this.head;
    while (node.next) {
      prevNode = node;
      node = node.next;
    }
    prevNode.next = null;
  }

  getAt(index) {
    let count = 0;
    let node = this.head;

    while (node) {
      if (index === count) return node;

      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const prevNode = this.getAt(index - 1);
    if (!prevNode || !prevNode.next) return;

    prevNode.next = prevNode.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const prevNode = this.getAt(index - 1) || this.getLast();
    prevNode.next = new Node(data, prevNode.next);
  }
}

module.exports = { Node, LinkedList };
