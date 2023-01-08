class Cat {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log('The cat says what cats say');
  }
  personalGreeting() {
    console.log(`${this.name} says 'meow!'`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();
