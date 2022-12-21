
let shape = {
  type: 'shape',
  getPerimeter() {
    return this.a + this.b + this.c;
  },

  getType() {
    return this.type;
  },
};

let Triangle = function constructor1(a, b, c, type = 'triangle') {
  // Object.setPrototypeOf(this, shape);
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = type;
};

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
