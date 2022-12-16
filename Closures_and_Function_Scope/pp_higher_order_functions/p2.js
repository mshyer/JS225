let numbers = [1, 2, 3, 4];
function checkEven(number) {
  return number % 2 === 0;
}

numbers.filter(checkEven); // [2, 4]

// checkEven is not a higher-order function, however, it is
//   a first-class func, and is passed to filter, which is a higher-order func.
// Filter is a higher-order function because it takes a callback func argument
