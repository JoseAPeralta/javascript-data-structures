class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }

  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (!item) {
      return this.length;
    }

    let newData = {};
    newData[0] = item;
    for (let i = 0; i < this.length; i++) {
      newData[i + 1] = this.data[i];
    }
    this.data = newData;
    this.length++;
    return this.length;
  }

  shift() {
    if (this.length === 0) return undefined;
    const shiftItem = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return shiftItem;
  }
}

const myArray = new MyArray();

myArray.push("Juan");
myArray.push("Jose");
myArray.push("Ariel");
myArray.push("Ioseph");

// console.log(`Add:`);
// console.log(myArray.push("Jorge"));
// console.log(`Delete last: ${myArray.pop()}`);

// console.log(`Delete by index: ${myArray.delete(1)}`);

console.log(myArray);
// myArray.unshift("azul");
console.log(myArray.shift());
console.log(myArray.data);
