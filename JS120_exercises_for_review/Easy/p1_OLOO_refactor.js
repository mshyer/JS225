const Rectangle = {
  init(width, length) {
    this.width = width;
    this.length = length;
    return this;
  },

  getWidth() {
    return this.width;
  },

  getLength() {
    return this.length;
  },

  getArea() {
    return this.width * this.length;
  },
};


const myRect = Object.create(Rectangle).init(4, 5);
const Square = Object.create(Rectangle);
Square.init = function(width) {
  Rectangle.init.call(this, width, width);
  return this;
};

console.log(myRect.getWidth());
console.log(myRect.getLength());
console.log(myRect.getArea());

let mySquare = Object.create(Square).init(5);
console.log(mySquare.getWidth());
console.log(mySquare.getLength());
console.log(mySquare.getArea());
