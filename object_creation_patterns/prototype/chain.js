let foo = {
  a: 1,
  b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);

bar.a;                // 1
baz.a;                // 1
baz.c;                // undefined
