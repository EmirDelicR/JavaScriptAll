/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. BINARY HEAPS
 *  1.1 MAX BINARY HEAP
 *  1.2 PRIORITY QUEUE
 *
 * */

/** ------------------------------- 1. BINARY HEAPS -------------------------------------- */

/*
 * Similar to binary search tree
 *  -> MaxBinaryHeap -> parent nodes are always larger then child nodes
 *  -> MinBinaryHeap -> parent nodes are always smaller then child nodes
 *  -> PriorityQueue
 *               41
 *          39        33
 *       18    27   12
 *
 *  Big O
 *    insert (log n)
 *    remove (log n)
 */

/** HELPER FUNCTION */
const bubbleUp = (heap, index) => {
  let parentIndex = Math.floor((index - 1) / 2);

  if (!heap[parentIndex] || heap[parentIndex] > heap[index]) {
    return;
  }
  /** Swap elements */
  [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
  bubbleUp(heap, parentIndex);
};

const sinkDown = (heap, parentIndex) => {
  let left = 2 * parentIndex + 1;
  let right = 2 * parentIndex + 2;

  if (left > heap.length - 1) {
    left = null;
  }

  if (right > heap.length - 1) {
    right = null;
  }

  const larger = heap[left] < heap[right] ? right : left;
  if (heap[larger] < heap[parentIndex] || larger === null) return;
  /** Swap elements */
  [heap[larger], heap[parentIndex]] = [heap[parentIndex], heap[larger]];

  sinkDown(heap, larger);
};

/** ------------------------------- 1.1 MAX BINARY HEAP -------------------------------------- */

class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }

  insert(element) {
    this.heap.push(element);
    let index = this.heap.length - 1;
    bubbleUp(this.heap, index);
  }

  extractMax() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      sinkDown(this.heap, 0);
    }
    return max;
  }

  print() {
    console.log("This is heap: ", this.heap);
  }
}

/** INSERT TO THE TREE */

/**
 *               41
 *          39        33
 *       18    27   12
 */

let heap = new MaxBinaryHeap();
heap.insert(18);
heap.insert(41);
heap.insert(33);
heap.insert(27);
heap.insert(39);
heap.insert(12);

heap.print();

heap.extractMax();
heap.extractMax();
heap.extractMax();
heap.extractMax();

heap.print();

/** ------------------------------- 1.2 PRIORITY QUEUE -------------------------------------- */

/** HELPER FUNCTION */
const bubble = (heap, index) => {
  let parentIndex = Math.floor((index - 1) / 2);

  if (
    !heap[parentIndex] ||
    heap[parentIndex].priority >= heap[index].priority
  ) {
    return;
  }
  /** Swap elements */
  [heap[index], heap[parentIndex]] = [heap[parentIndex], heap[index]];
  bubble(heap, parentIndex);
};

const sink = (heap, parentIndex) => {
  let left = 2 * parentIndex + 1;
  let right = 2 * parentIndex + 2;

  if (left > heap.length - 1) {
    left = null;
  }

  if (right > heap.length - 1) {
    right = null;
  }

  const larger =
    heap[left] && heap[right] && heap[left].priority < heap[right].priority
      ? right
      : left;
  if (
    heap[larger] === undefined ||
    heap[larger].priority < heap[parentIndex].priority ||
    larger === null
  )
    return;
  /** Swap elements */
  [heap[larger], heap[parentIndex]] = [heap[parentIndex], heap[larger]];

  sink(heap, larger);
};

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.heap.push(newNode);
    let index = this.heap.length - 1;
    bubble(this.heap, index);
  }

  dequeue() {
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      sink(this.heap, 0);
    }
    return max;
  }

  print() {
    console.log("This is heap: ", this.heap);
  }
}

/** INSERT TO */

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue("cold", 1);
priorityQueue.enqueue("gunshot", 10);
priorityQueue.enqueue("high fever", 3);
priorityQueue.enqueue("hart attack", 15);

priorityQueue.print();

priorityQueue.dequeue();
priorityQueue.dequeue();

priorityQueue.print();
