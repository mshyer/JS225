let shape = {
  height: 0,
  width: 0,
  zAxis: 0,
};

let square = Object.create(shape);
console.log(square);
console.log(square.hasOwnProperty('height'));
console.log(square.height);
