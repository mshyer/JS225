//const name = 'Naveed';
//const greeting = 'Hello';
// function makeGreeter(name, greeting) {
//   const greeter = {
//     message: `${greeting} ${name}!`,
//     sayGreetings() {
//       console.log(this.message);
//     }
//   };
//   return greeter;
// }

const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}!`;
  })(),

  sayGreetings() {
    console.log(this.message);
  }
};

// let greeter = makeGreeter('Naveed', 'Hello');
greeter.sayGreetings();
