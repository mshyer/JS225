let boo = {};
boo.myProp = 1;

let far = Object.create(boo);

// lots of code

far.myProp;       // 1
console.log(far.hasOwnProperty('myProp'));
