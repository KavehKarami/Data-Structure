class MySet {
  collection = [];

  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove(element) {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }

  union(otherSet) {
    let unionSet = new MySet();
    let fristSet = this.values();
    let secondSet = otherSet.values();

    fristSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  }

  intersection(otherSet) {
    let intersectionSet = new MySet();
    let fristSet = this.values();

    fristSet.forEach((e) => {
      if (otherSet.has(e)) intersectionSet.add(e);
    });

    return intersectionSet;
  }

  diffrence(otherSet) {
    let diffrenceSet = new MySet();
    let fristSet = this.values();

    fristSet.forEach((e) => {
      if (!otherSet.has(e)) diffrenceSet.add(e);
    });

    return diffrenceSet;
  }

  subset(otherSet) {
    let fristSet = this.values();
    return fristSet.every((e) => otherSet.has(e));
  }
}

/* ---------------------------------- setA ---------------------------------- */

let setA = new MySet();
setA.add(1);
setA.add(1);
setA.add(1);
setA.add(1);

setA.add(2);
setA.add(3);
setA.add(4);
setA.add(5);

setA.remove(5);
console.log("values: " + setA.values());
console.log("size: " + setA.size());

/* ---------------------------------- setB ---------------------------------- */

let setB = new MySet();
setB.add(3);
setB.add(3);
setB.add(3);

setB.add(3);
setB.add(4);
setB.add(5);

setB.add(6);
setB.add(7);
setB.add(8);

console.log("values: " + setB.values());
console.log("size: " + setB.size());

/* ------------------- union,intersection,diffrence,subset ------------------ */

console.log("union values: " + setA.union(setB).values());
console.log("intersection values: " + setA.intersection(setB).values());
console.log("diffrence values: " + setA.diffrence(setB).values());
console.log("isSubset: " + setA.subset(setB));
