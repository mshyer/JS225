let adder = (a, b) => a + b;

let add42 = adder.bind(null, 42);
console.log(add42(1));
