let a = 10;
let obj = {
  a
};

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a);
console.log(newObj.a === obj.a);
