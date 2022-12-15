'use strict';
function foo() {
  console.log(this.a);
}

let a = 2;
foo();
