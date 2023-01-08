function Rectangle(width, length) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.getWidth = function() {
  return this.width;
};

Rectangle.prototype.getLength = function() {
  return this.length;
};

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

let rect = new Rectangle(4, 5);

console.log(rect.getWidth());
console.log(rect.getLength());
console.log(rect.getArea());
