let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here?
}

foo();

// what is eligible for GC here?

// more code
// On line 5, neither myNum not myArr are eligible for 
// Garbage collection, as the functin foo() has not yet returned
// On line 10, myArr is eligible for GC, as it is not referenced.
