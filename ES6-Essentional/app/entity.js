class Entity {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hi! , I'm ${this.name}!`);
  }
}

export default Entity;
