// because foo references the same function as bar
// when calling foo as method of obj, you are also calling bar as method
// Therefore, it will return 2
let a = 1;
function bar() {
  console.log(this.a);
}

let obj = {
  a: 2,
  foo: bar,
};

obj.foo();
console.log('lets see if');
console.log(bar === obj.foo);
