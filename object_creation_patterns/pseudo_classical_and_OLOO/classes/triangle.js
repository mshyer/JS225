'use strict';
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.type = "triangle";
  }
}

let customPrototype = { a: "something random" };
Triangle.prototype = customPrototype;

let t = new Triangle(1, 2, 3);
console.log(t.a); // 1
