(function foo() {
  console.log('Bar');
})();

foo(); // ?
// no foo is not accessible in the global scope.
// This is because functions create their own private scope
