class Cat {
  constructor(name) {
    console.log('I\'m a cat!');
    console.log(`My name is ${name}`);
  }

}

let kitty = new Cat('kitty');
console.log(kitty.constructor);
