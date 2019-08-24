/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. SINGLY LINKED LIST
 *  2.
 *
 * */

/** ------------------------------- 1. SINGLY LINKED LIST -------------------------------------- */

/** HELPER FUNCTION */
const helper = (length, name) => {
  if (length === 0) {
    throw `${name} can not be executed because list is empty!`;
  }
};

// Linked list are good for insert and deletion !!!

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  /**
   * Get element from the position
   * @param {*} index
   */
  get(index) {
    helper(this.length, "GET");

    if (index < 0 || index > this.length - 1) {
      let msg =
        index < 0
          ? "is negative number"
          : `it must be smaller then the list length that is ${this.length}`;
      throw `Index is not valid because ${msg}!`;
    }

    let currentNode = this.head;
    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }

    return currentNode;
  }

  /**
   * Update element on given position
   * @param {*} index
   * @param {*} val
   */
  set(index, val) {
    let currentNode = this.get(index);
    currentNode.val = val;
  }

  /**
   * Insert element on the position
   * @param {*} index
   * @param {*} val
   */
  insert(index, val) {
    let currentNode = this.get(index);

    if (index === 0) {
      this.unshift(val);
      return;
    }

    if (index >= this.length) {
      this.push(val);
      return;
    }

    let previousNode = this.get(index - 1);

    let newNode = new Node(val);
    previousNode.next = newNode;
    newNode.next = currentNode;

    this.length++;
  }

  /**
   * Remove element on the position
   * @param {*} index
   */
  remove(index) {
    let currentNode = this.get(index);

    if (index === 0) {
      this.shift();
      return;
    }

    if (index >= this.length) {
      this.pop();
      return;
    }

    let previousNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    previousNode.next = nextNode;
    this.length--;

    return currentNode;
  }

  /**
   * Add element at the end of the list
   * @param {*} val
   */
  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /**
   * Remove element from the end of the list
   */
  pop() {
    helper(this.length, "POP");

    let currentNode = this.head;
    let newTail = currentNode;
    this.length--;

    if (this.length === 1) {
      newTail = currentNode;
    }

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
      return currentNode;
    }

    this.tail = newTail;
    this.tail.next = null;
    return currentNode;
  }

  /**
   * Remove element from the beginning of the list
   */
  shift() {
    helper(this.length, "SHIFT");

    this.length--;
    let headTmp = this.head;

    if (this.length === 0) {
      this.tail = null;
      this.head = null;
      return headTmp;
    }

    this.head = headTmp.next;
    return headTmp;
  }

  /**
   * Add element at the beginning of the list
   * @param {*} val
   */
  unshift(val) {
    if (!this.head) {
      return this.push(val);
    }
    let newNode = new Node(val);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  /**
   * Search node by value, if is not find return -1
   * @param {*} val
   * @return index
   *
   */
  search(val) {
    let currentNode = this.head;
    let counter = 0;
    let index = -1;

    if (this.head.val === val) {
      return 0;
    }

    if (this.tail.val === val) {
      return this.length - 1;
    }

    while (currentNode.next) {
      if (currentNode.val === val) {
        index = counter;
        break;
      }
      currentNode = currentNode.next;
      counter++;
    }
    return index;
  }

  /**
   * Reverse the order of the list
   */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let list = new SinglyLinkedList();
console.log("Empty list: ", list);

/** PUSH TO THE LIST */
list.push(1);
console.log("List with one node: ", list);
list.push(2);
list.push(3);
list.push(4);

/** LIST ELEMENT OF THE THE LIST */
console.log("List with 4 node: ", list);
console.log("List head: ", list.head);
console.log("List head next element: ", list.head.next);
console.log("Last element: ", list.tail);

/** REMOVE LAST ELEMENT FROM THE LIST */
const removed = list.pop();
console.log("Removing one element from end: ", removed);
console.log("Checking last element: ", list.tail);

/** SHIFT ELEMENT FROM THE LIST */
const shifted = list.shift();
console.log("Removing one element from start: ", shifted);
console.log("Checking new head: ", list.head);

/** UNSHIFT ELEMENT FROM THE LIST */
list.pop();
list.pop();
list.unshift(1);
console.log("Adding one element at the start: ", list.head);
console.log("Checking new list: ", list);

/** GET ELEMENT FROM THE LIST */
let element = list.get(0);
console.log("Element on the position 0 is: ", element);
list.push(2);
element = list.get(1);
console.log("Element on the position 1 is: ", element);
console.log("List: ", list);

/** SET ELEMENT AT POSITION IN THE LIST */
list.set(0, 1.1);
console.log("This is list after set: ", list);

/** INSERT ELEMENT AT POSITION IN THE LIST */
list.insert(1, 1.5);
console.log("This is list after insert: ", list);

/** REMOVE ELEMENT AT POSITION IN THE LIST */
const remove = list.remove(1);
console.log("Removed element is: ", remove);
console.log("This is list after removing: ", list);

/** SEARCH ELEMENT IN LIST BY VALUE  */
const searched = list.search(1.1);
console.log("This is searched value: ", searched);

/** REVERSE ORDER OF ELEMENT IN LIST   */
list.reverse();
console.log("This is list after reverse: ", list);
