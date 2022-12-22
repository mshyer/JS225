// Use constructor to set object states
// Put shared methods on constructor's prototype

let Point = function(x = 0, y = 0) {
  this.x = x;
  this.y = y;
};

Point.prototype.onXAxis = function() {
  return this.y === 0;
};

Point.prototype.onYAxis = function() {
  return this.x === 0;
};

Point.prototype.distanceToOrigin = function() {
  return Math.sqrt((this.x * this.x) + (this.y * this.y));
};

let pointA = new Point(30, 40);
let pointB = new Point(20);

console.log(pointA instanceof Point);
console.log(pointB instanceof Point);

console.log(pointA.distanceToOrigin());
console.log(pointB.onXAxis());
