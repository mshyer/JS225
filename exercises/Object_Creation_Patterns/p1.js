// Create a method on the Object.prototype object
// Until a placeholder is the Object prototype, add the
//   prototype of it to an array and set placeholder to the prototype
//   Then return the array
// Object.prototype.ancestors = function f1() {
//   let currentObj = this;
//   let ancestorsArr = [];
//   while (currentObj) {
//     currentObj = Object.getPrototypeOf(currentObj);
//     if (currentObj) {
//       ancestorsArr.push(currentObj.name || "Object.prototype");
//     }
//   }
//   return ancestorsArr;
// };

Object.prototype.ancestors = function ancestors() {
  let ancestor = Object.getPrototypeOf(this);
  if (ancestor.hasOwnProperty('name')) {
    return [ancestor.name].concat(ancestor.ancestors());
  }
  return ['Object.prototype'];

};
// name property added to make objects easier to identify
const foo = {name: 'foo'};
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());  // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors());  // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors());  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors());  // returns ['Object.prototype']{
