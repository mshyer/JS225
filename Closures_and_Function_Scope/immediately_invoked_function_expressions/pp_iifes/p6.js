// refactor using recursion:
//
// function countdown(count) {
//   (function(num) {
//     while (num >= 0) {
//       console.log(num);
//       num -= 1;
//     }
//     console.log('Done!');
//   })(count);
// }

//the function calls itself with new number until end condition
//End condition n = 0, logs done

function countdown(count) {
  (function count (num) {
    if (num > 0) {
      console.log(num);
      return count(num - 1);
    }
    return console.log('Done!');
  })(count);
}


countdown(7);
countdown(100);

