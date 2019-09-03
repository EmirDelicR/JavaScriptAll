/** ------------------------------- DATA STRUCTURE -------------------------------------- */
/**
 *  1. HASH TABLES
 *
 * */

/** ------------------------------- 1. HASH TABLES -------------------------------------- */

/*
 *   key-values pair
 *
 *   Insert: O(1)
 *   Deletion: O(1)
 *   Access: O(1)
 *
 */

/** HELPER FUNCTION */
const iterateKeyMap = (table, type) => {
  let arr = [];
  table.forEach(item => {
    item.forEach(elem => {
      if (!arr.includes(elem[type])) {
        arr.push(elem[type]);
      }
    });
  });

  return arr;
};

const MAX_STRING_ITERATION = 50;
const GET_KEYS = 0;
const GET_VALUES = 1;

class HashTable {
  constructor(size = 53) {
    this.size = size;
    this.keyMap = new Array(size);
  }

  _hash = key => {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, MAX_STRING_ITERATION); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.size;
    }

    return total;
  };

  _set(key, val) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }

  _get(key) {
    const index = this._hash(key);
    if (!this.keyMap[index]) {
      return undefined;
    }
    return this.keyMap[index].find(elem => elem[0] === key)[1];
  }

  keys() {
    console.log("Keys: ", iterateKeyMap(this.keyMap, GET_KEYS));
  }
  values() {
    console.log("Values: ", iterateKeyMap(this.keyMap, GET_VALUES));
  }

  print() {
    console.log("This is hash table: ", this.keyMap);
  }
}

let table = new HashTable();
table._set("test", "testing");
table.print();
let elem = table._get("test");
console.log("Element: ", elem);
table.keys();
table.values();
