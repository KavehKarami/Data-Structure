function hash(str, max) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h += str.charCodeAt(i);
  return h % max;
}

class HashTable {
  constructor(storageLimit = 4) {
    this.storageLimit = storageLimit;
  }
  storage = [];

  print() {
    console.log(this.storage);
  }

  add(key, value) {
    let index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) this.storage[index] = [[key, value]];
    else {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }

  remove(key) {
    let index = hash(key, this.storageLimit);

    if (this.storage.length === 1 && this.storage[index][0][0] === key)
      delete this.storage[index];
    else
      for (let i = 0; i < this.storage[index].length; i++)
        if (this.storage[index][i][0] === key) delete this.storage[index][i];
  }

  lookup(key) {
    let index = hash(key, this.storageLimit);

    if (this.storage[index] === undefined) return undefined;
    else
      for (let i = 0; i < this.storage[index].length; i++)
        if (this.storage[index][i][0] === key) return this.storage[index][i][1];
  }
}

console.log(hash("quincy", 10));

let ht = new HashTable(6);
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
