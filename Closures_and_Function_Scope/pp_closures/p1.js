// Function returns a function
// makeMultipleLister Function:
// Input: number
// Output: anonymous func
// ANONYMOUS FUNC:
// input: none
// Output: log to console 
// DATA STRUCTURE: loops and numbers
// Algorithm:
// From 1-100 (for loop) not inclusive
// log the number to the console if the number is a multiple of num

function makeMultipleLister(num) {
  return function() {
    let idx;
    for (idx = 1; idx < 100; idx += 1) {
      if (idx % num === 0) {
        console.log(idx);
      }
    }
  };
}

let lister = makeMultipleLister(13);
lister();
