class Queue {
  collection = [];

  print() {
    return this.collection;
  }

  enqueue(el) {
    this.collection.push(el);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}
