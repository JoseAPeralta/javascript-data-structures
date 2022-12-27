let singlyLinkedList = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.length;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.length;
  }

  getIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) this.append(value);

    const newNode = new Node(value);
    const firstPointer = this.getIndex(index - 1);
    const holdingPointer = firstPointer.next;

    firstPointer.next = newNode;
    newNode.next = holdingPointer;
  }
}

let myLinkedList = new MySinglyLinkedList(1);

console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.append(4));

console.log(myLinkedList.prepend(10));

console.log(myLinkedList.insert(1, 15));

console.log(myLinkedList);
