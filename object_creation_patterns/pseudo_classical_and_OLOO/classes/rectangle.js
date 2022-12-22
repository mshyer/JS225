// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }
// 
// Rectangle.prototype.getArea = function() {
//   return this.length * this.width;
// };
// 
// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);
// console.log(rec instanceof Rectangle);
// console.log(rec.constructor);
// console.log(rec.getArea());

// class Rectangle {
//   constructor(length, width) {
//     this.length = length;
//     this.width = width;
//   }
// 
//   getArea() {
//     return this.length * this.width;
//   }
// }
// 
// let rec = new Rectangle(10, 5);
// console.log(typeof Rectangle);
// console.log(rec instanceof Rectangle);
// console.log(rec.constructor);
// console.log(rec.getArea());
//
class Rectangle {
  static self = this;
  static description = 'A rectangle is a shape w 4 sides';

  static getDescription() {
    //return 'A rectangle is a shape with 4 sides';
    return Rectangle.description;
  }
}

console.log(Rectangle.getDescription());
