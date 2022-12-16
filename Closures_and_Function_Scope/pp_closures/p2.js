// in order for functions to share a closure, do they need
// To be returned at the same invocation?
// function runningTotal
// input: none
// output: add and subtract functions as part of ARRAY
// alg:
// initialize running total to 0
// return an array containing two functions
//  func1: takes num input, ads num to the running total
//  func2: takes num input, subtracts from total
// then initialize the two add and subtractors with destructuring assignment

function runningTotal() {
  let total = 0;
  return {
    add(num) {
      total += num;
      console.log(total);
    },
    subtract(num) {
      total -= num;
      console.log(total);
    },
  };
}

let {add, subtract} = runningTotal();
add(1);
add(42);
subtract(39);
add(6);
