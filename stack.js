class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
  }

  pop() {
    const holdingPointer = this.top.next;

    this.top = holdingPointer;
    this.length--;
    return this;
  }
}

const myStack = new Stack();

myStack.push(10);
myStack.push(15);
myStack.push(25);
myStack.push(35);

console.log(myStack.peek());

myStack.pop();
console.log(myStack.peek());
