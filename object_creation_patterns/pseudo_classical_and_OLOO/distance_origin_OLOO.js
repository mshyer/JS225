let Point = {
  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointA = Object.create(Point).init(30, 40);

console.log(Point.isPrototypeOf(pointA));

console.log(pointA.distanceToOrigin());
console.log(pointA.onXAxis());
