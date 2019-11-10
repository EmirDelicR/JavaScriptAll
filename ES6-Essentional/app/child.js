import Entity from "./entity";

class Child extends Entity {
  constructor(name) {
    super(name);
  }
  hello() {
    console.log(`Hello from child ${this.name} `);
  }
}

export default Child;
