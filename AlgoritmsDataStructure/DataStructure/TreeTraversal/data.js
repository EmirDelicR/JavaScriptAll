/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. TREE TRAVERSAL
 *
 * */

/** ------------------------------- 1. TREE TRAVERSAL -------------------------------------- */

/*
 *
 *  BFS - Breadth First Search
 *  DFS - Depth First Search
 *      -> PreOrder
 *      -> PostOrder
 *      -> InOrder
 *
 *        10
 *    5        13
 *  2   7   11   16
 */

/** HELPER FUNCTION */
const insertHelper = (current, node, side) => {
  if (!current[side]) {
    current[side] = node;
    return true;
  }
  return false;
};

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  find(val) {
    let element = {
      node: null,
      inTree: false
    };

    if (!this.root) {
      return element;
    }

    let current = this.root;

    while (current && !element.inTree) {
      if (val === current.value) {
        element.node = current;
        element.inTree = true;
        return element;
      }

      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return element;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (val === current.value) {
        current.count++;
        return;
      }

      if (val < current.value) {
        const isInsertedLeft = insertHelper(current, newNode, "left");
        if (isInsertedLeft) return;
        current = current.left;
      } else {
        const isInsertedRight = insertHelper(current, newNode, "right");
        if (isInsertedRight) return;
        current = current.right;
      }
    }
  }

  BFS(val) {
    /** Note use queue(for queue) here instead of array  */
    let data = [],
      queue = [],
      node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.value === val) return node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }

  DFSPreOrder(val, current = this.root, data = { all: [], index: -1 }) {
    data.all.push(current);
    if (current.value === val) data.index = data.all.length - 1;
    if (current.left) this.DFSPreOrder(val, current.left, data);
    if (current.right) this.DFSPreOrder(val, current.right, data);

    if (data.index !== -1) return data.all[data.index];
    return data;
  }

  DFSPostOrder(val, current = this.root, data = { all: [], index: -1 }) {
    if (current.left) this.DFSPostOrder(val, current.left, data);
    if (current.right) this.DFSPostOrder(val, current.right, data);
    data.all.push(current);
    if (current.value === val) data.index = data.all.length - 1;
    if (data.index !== -1) return data.all[data.index];
    return data;
  }

  DFSInOrder(val, current = this.root, data = { all: [], index: -1 }) {
    if (current.left) this.DFSInOrder(val, current.left, data);
    data.all.push(current);
    if (current.value === val) data.index = data.all.length - 1;
    if (current.right) this.DFSInOrder(val, current.right, data);
    if (data.index !== -1) return data.all[data.index];
    return data;
  }
}

/**  Up code is just to create an tree **/

/** TEST */

let tree = new BinarySearchTree();
console.log("Empty tree: ", tree);

/** INSERT TO THE TREE */

/**
 *        10
 *    5        13
 *  2   7   11   16
 *    3
 */

tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(7);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(3);
tree.insert(10);

/** FIND ELEMENT IN TREE */
let elem = tree.find(13);
console.log("element with value 13: ", elem);
elem = tree.find(12);
console.log("element with value 12 is not in tree: ", elem);

/** BFS if not in tree return tree in BFS order */
let data = tree.BFS(12);
console.log("BFS DATA: ", data);
/** Return search node */
data = tree.BFS(13);
console.log("BFS DATA: ", data);

/** DFS if not in tree return tree in DFS order */
let DfsPreOrderData = tree.DFSPreOrder(12);
console.log("DfsPreOrderData DATA: ", DfsPreOrderData);
/** Return search node */
DfsPreOrderData = tree.DFSPreOrder(2);
console.log("DfsPreOrderData DATA: ", DfsPreOrderData);

/** DFS if not in tree return tree in DFS order */
let DfsPostOrderData = tree.DFSPostOrder(12);
console.log("DfsPostOrderData DATA: ", DfsPostOrderData);
/** Return search node */
DfsPostOrderData = tree.DFSPostOrder(2);
console.log("DfsPostOrderData DATA: ", DfsPostOrderData);

/** DFS if not in tree return tree in DFS order */
let DfsInOrderData = tree.DFSInOrder(12);
console.log("DfsInOrderData DATA: ", DfsInOrderData);
/** Return search node */
DfsInOrderData = tree.DFSInOrder(2);
console.log("DfsInOrderData DATA: ", DfsInOrderData);
