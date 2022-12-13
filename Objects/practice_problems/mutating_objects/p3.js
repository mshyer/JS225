let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func();
console.log(message);
