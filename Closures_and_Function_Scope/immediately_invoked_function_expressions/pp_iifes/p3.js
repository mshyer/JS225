var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

// function sum(arr) {
//   return arr.reduce(function(sum, number) {
//     sum += number;
//     return sum;
//   }, 0);
// }

// sum += sum(numbers);  // ?
// Problem: add a sum of the numbers array to the sum var
// Using IIFE
// sum += (IIFE)
// IIFE: reduce 
sum += (function(arr) {
  return arr.reduce((sum, num) => sum + num);
})(numbers);
console.log(sum);

// This problem highlights variable shadowing
// IIFEs can help us clean this up right?
