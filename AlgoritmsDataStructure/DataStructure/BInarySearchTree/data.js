/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. BINARY SEARCH TREES
 *
 * */

/** ------------------------------- 1. BINARY SEARCH TREES -------------------------------------- */

/*
 *
 * HTML DOM
 * Network Routing
 * Abstract Syntax Tree
 * Artificial Intelligent
 * Folders in OS
 *
 * Big O:
 *  Insert O(log n)
 *  Searching O(log n)
 *
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
}

let tree = new BinarySearchTree();
console.log("Empty tree: ", tree);

/** INSERT TO THE TREE */

/**
 *        10
 *    5        13
 *  2   7   11   16
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
