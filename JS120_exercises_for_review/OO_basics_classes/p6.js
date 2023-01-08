class Cat {
  constructor(name) {
    this.name = name;
    console.log('I\'m a cat!');
  }
  greet() {
    console.log(`My name is ${this.name}`);
  }
}

let kitty = new Cat('kitty');
console.log(kitty.constructor);
kitty.greet();
