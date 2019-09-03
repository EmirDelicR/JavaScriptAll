/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. GRAPHS
 *
 * */

/** ------------------------------- 1. GRAPHS -------------------------------------- */

/*
 *   |v| - number of vertices
 *   |e| - number of edge
 *
 *                  Adjacency List      ||     Adjacency Matrix
 *  Add vertex:           O(1)                        O(| v^2 |)
 *  Add edge:             O(1)                        O(1)
 *  Remove vertex:        O(|v| + |e|)                O(| v^2 |)
 *  Remove edge           O(|e|)                      O(1)
 *  Query:                O(|v| + |e|)                O(1)
 *  Storage:              O(|v| + |e|)                O(| v^2 |)
 *
 *                   - take less space              - takes more space
 *                   - faster to iterate            - slower to iterate
 *                     over all edge                  over all edge
 *                   - slower to lookup             - faster to lookup
 *                     specific edge                  specific edge
 *
 */

/** HELPER FUNCTION */

class Graph {
  constructor() {
    this.list = {};
  }

  addVertex(name) {
    if (!this.list[name]) this.list[name] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1].push(vertex2);
      this.list[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.list[vertex1] && this.list[vertex2]) {
      this.list[vertex1] = this.list[vertex1].filter(elem => elem !== vertex2);
      this.list[vertex2] = this.list[vertex2].filter(elem => elem !== vertex1);
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

  print() {
    console.log("This is graph: ", this.list);
  }
}

let graph = new Graph();
graph.addVertex("Test_1");
graph.addVertex("Test_2");
graph.print();

graph.addEdge("Test_1", "Test_2");
graph.print();
// graph.removeEdge("Test_1", "Test_2");
graph.print();
graph.removeVertex("Test_1");
graph.print();

/** Test DFS and BFS */

let newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addVertex("D");
newGraph.addVertex("E");
newGraph.addVertex("F");

newGraph.addEdge("A", "B");
newGraph.addEdge("A", "D");
newGraph.addEdge("A", "F");
newGraph.addEdge("B", "C");
newGraph.addEdge("D", "B");
newGraph.addEdge("E", "F");
newGraph.addEdge("C", "F");

let dfsList = newGraph.DFS("A");
console.log("dfsList: ", dfsList);
let bfsList = newGraph.BFS("A");
console.log("bfsList: ", bfsList);
