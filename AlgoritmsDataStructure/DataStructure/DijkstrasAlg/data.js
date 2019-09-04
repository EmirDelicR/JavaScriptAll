/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. Dijkstra's Algorithm
 *
 * */

/** ------------------------------- 1. Dijkstra's Algorithm -------------------------------------- */

/**
 *   Finds the shortest path between two vertices on graph
 */

/** HELPER FUNCTION */
const bubble = (heap, index) => {
  let parentIndex = Math.floor((index - 1) / 2);

  if (
    !heap[parentIndex] ||
    heap[parentIndex].priority <= heap[index].priority
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
    heap[left] && heap[right] && heap[left].priority > heap[right].priority
      ? right
      : left;
  if (
    heap[larger] === undefined ||
    heap[larger].priority > heap[parentIndex].priority ||
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
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      sink(this.heap, 0);
    }
    return min;
  }

  print() {
    console.log("This is heap: ", this.heap);
  }
}

///////////////////////////////////////////////////////////////////////////////////////////

/** HELPER FUNCTIONS */
const createDistanceList = (list, start) => {
  const nodes = new PriorityQueue();
  const previous = {};
  const distances = {};

  distances[start] = 0;
  nodes.enqueue(start, 0);

  for (let vertex in list) {
    if (vertex !== start) {
      distances[vertex] = Infinity;
      nodes.enqueue(vertex, Infinity);
    }
    previous[vertex] = null;
  }
  return [distances, nodes, previous];
};

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(name) {
    if (!this.list[name]) this.list[name] = [];
  }

  addEdge(vertex1, vertex2, weight = 0) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1].push({ node: vertex2, weight });
      this.list[vertex2].push({ node: vertex1, weight });
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1] = this.list[vertex1].filter(
        elem => elem.node !== vertex2
      );
      this.list[vertex2] = this.list[vertex2].filter(
        elem => elem.node !== vertex1
      );
    }
  }

  removeVertex(vertex) {
    if (this.list[vertex]) {
      this.list[vertex].forEach(element => {
        this.removeEdge(vertex, element);
      });
      delete this.list[vertex];
    }
  }

  DFS(vertex) {
    if (this.list[vertex].length === 0) {
      return null;
    }

    let visited = {};
    const helper = v => {
      visited[v] = true;
      this.list[v].forEach(neighbor => {
        if (!visited[neighbor]) helper(neighbor);
      });
    };
    helper(vertex);
    return Object.keys(visited);
  }

  BFS(vertex) {
    const visited = {};
    const queue = [vertex];

    visited[vertex] = true;

    const helper = () => {
      if (queue.length) {
        let current = queue.shift();
        this.list[current].forEach(n => {
          if (!visited[n]) {
            visited[n] = true;
            queue.push(n);
          }
        });
        helper();
      }
    };

    helper();
    return Object.keys(visited);
  }

  dijkstra(start, finish) {
    const [distances, nodes, previous] = createDistanceList(this.list, start);
    const visited = { [start]: true };

    const helper = () => {
      if (!nodes.heap.length) return;

      let current = nodes.dequeue().value;
      visited[current] = true;

      this.list[current].forEach(n => {
        if (!visited[n.node]) {
          const priority = distances[current] + n.weight;
          if (priority < distances[n.node]) {
            distances[n.node] = priority;
            previous[n.node] = current;
          }
          nodes.enqueue(n.node, priority);
        }
      });

      helper();
    };

    helper();

    let steps = [];
    let current = finish;

    while (current) {
      steps.push(current);
      current = previous[current];
    }

    steps = steps.reverse().join("->");
    console.log(`With a distance of ${distances[finish]} ${steps}`);
    return `With a distance of ${distances[finish]} ${steps}`;
  }

  print() {
    console.log("This is graph: ", this.list);
  }
}

/** Test DFS and BFS */

let newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B", 4);
newGraph.addEdge("A", "C", 2);
newGraph.addEdge("B", "E", 3);
newGraph.addEdge("C", "D", 2);
newGraph.addEdge("C", "F", 4);
newGraph.addEdge("D", "F", 1);
newGraph.addEdge("D", "E", 3);
newGraph.addEdge("E", "F", 1);

newGraph.dijkstra("A", "D");
