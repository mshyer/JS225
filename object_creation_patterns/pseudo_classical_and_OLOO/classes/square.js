// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }
// 
// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };
// 
// Rectangle.prototype.toString = function() {
//   return `[Rectangle ${this.length} x ${this.width}]`;
// };
// 
// function Square(size) {
//   Rectangle.call(this, size, size);
// }
// 
// Square.prototype = Object.create(Rectangle.prototype);
// Square.prototype.constructor = Square;
// 
// Square.prototype.toString = function() {
//   return `[Square ${this.length} x ${this.width}]`;
// };
// 
// let sharpBoi = new Square(4);
// console.log(sharpBoi);
// console.log(Object.getPrototypeOf(sharpBoi));

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `[Rectangle ${this.width * this.length}]`;
  }
}

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  toString() {
    return `[Square] ${this.width * this.length}`;
  }
}
