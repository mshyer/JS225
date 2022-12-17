function makeGreeting() {
  let foo = { greeting: 'hello' };
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?
//   -the object created on line 2 is not eligible for GC
//   - This is because a reference to that obj is stored
//   - in the closure created by the function returned by
//   - makeGreeting.
// more code
