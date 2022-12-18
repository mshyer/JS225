// count down drom 7 to 0 inclusive using IIFE, then message done
// I could just write a normal function and execute it...
// passing in 7 as an argument, I guess? What's the point
//

function countdown(count) {
  (function(num) {
    while (num >= 0) {
      console.log(num);
      num -= 1;
    }
    console.log('Done!');
  })(count);
}

countdown(7);
countdown(100);
