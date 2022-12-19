class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const current = currentBucket[i];
          currentBucket.splice(i, 1);
          return current;
        }
      }
    }
    return undefined;
  }

  getAllKeys() {
    // const keys = [];
    // for (let i = 0; i < this.data.length; i++) {
    //   if (this.data[i]) {
    //     for (let j = 0; j < this.data[i].length; j++) {
    //       keys.push(this.data[i][j][0]);
    //     }
    //   }
    // }
    // return keys;
    return this.data
      .filter((item) => item != undefined)
      .flat()
      .map((item) => item[0]);
  }
}

const myHash = new HashTable(50);
console.log(myHash);
myHash.set("Diego", 1993);
myHash.set("Mariana", 1993);
myHash.set("Mario", 1993);
myHash.set("Jose", 1993);

console.log(myHash.data);
// console.log(myHash.get("Diego"));

// console.log(myHash.delete("Diego"));

console.log(myHash.data);
console.log(myHash.getAllKeys());
