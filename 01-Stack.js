class Stack {
  count = -1;
  storage = [];

  push(value) {
    ++this.count;
    this.storage[this.count] = value;
  }

  pop() {
    if (this.count === -1) return undefined;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    --this.count;
    return result;
  }

  size() {
    return this.count;
  }

  peek() {
    return this.storage[this.count];
  }
}

let myStack = new Stack();

myStack.push(1);
console.log("peek: " + myStack.peek());
myStack.push(2);
console.log("peek: " + myStack.peek());
myStack.push(3);
console.log("peek: " + myStack.peek());
myStack.push(4);
console.log("peek: " + myStack.peek());
myStack.push(5);
console.log("peek: " + myStack.peek());
myStack.push(6);
console.log("peek: " + myStack.peek());

console.log("\n");
console.log("size: " + myStack.size());
console.log("\n");

console.log("pop: " + myStack.pop());
console.log("pop: " + myStack.pop());
