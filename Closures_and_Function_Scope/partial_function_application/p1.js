function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(`${capitalized}, ${name}!`);
}

greet('Good morning', 'Mikmik');

let sayHello = greet.bind(null, 'hello');
console.log(sayHello('Brandon'));

let sayBye = greet.bind(null, 'bye bye');
sayBye('Sarah');
