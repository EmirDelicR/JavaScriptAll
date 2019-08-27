/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. STACKS AND QUEUES
 *
 * */

/** ------------------------------- 1. STACK -------------------------------------- */

/*
 * LIFO - last in first out (on array that is push and pop )
 * Usage:
 *  1. function invocations
 *  2. undo / redo
 *  3. routing
 *
 * Insert : O(1)
 * Remove : O(1)
 */

/** HELPER FUNCTION */
const helper = (length, name) => {
  if (length === 0) {
    throw `${name} can not be executed because list is empty!`;
  }
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  pop() {
    helper(this.size, "POP");
    this.size--;
    let firstTmp = this.first;
    if (this.size === 0) {
      this.last = null;
      this.first = null;
      return firstTmp;
    }

    this.first = firstTmp.next;
    firstTmp = null;
    return firstTmp;
  }

  push(val) {
    let newNode = new Node(val);
    this.size++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    let tmp = this.first;
    this.first = newNode;
    this.first.next = tmp;
    tmp = null;
  }
}

let list = new Stack();
console.log("Empty list: ", list);

/** PUSH TO THE LIST */
list.push(1);
console.log("List with one element: ", list);
list.push(2);
console.log("List with two element: ", list);
/** POP FROM THE LIST */
list.pop();
console.log("List after pop: ", list);
list.pop();
console.log("List after pop: ", list);

/** ------------------------------- 1. QUEUES -------------------------------------- */

/*
 * FIFO - First in first out (on array that is push and shift or unshift and pop )
 * Usage:
 *  1. Background task
 *  2. Uploading
 *  3. Printing
 *
 *  Insert : O(1)
 *  Remove : O(1)
 */
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  dequeue() {
    helper(this.size, "DEQUEUE");
    this.size--;
    let firstTmp = this.first;
    if (this.size === 0) {
      this.last = null;
      this.first = null;
      return firstTmp;
    }

    this.first = firstTmp.next;
    firstTmp = null;
    return firstTmp;
  }

  enqueue(val) {
    let newNode = new Node(val);
    this.size++;
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
      return;
    }
    this.last.next = newNode;
    this.last = newNode;
  }
}

let queue = new Queue();
console.log("Empty queue: ", queue);

/** ENQUEUE TO THE QUEUE */
queue.enqueue(1);
console.log("queue with one element: ", queue);
queue.enqueue(2);
console.log("queue with two element: ", queue);
/** POP FROM THE queue */
queue.dequeue();
console.log("queue after pop: ", queue);
