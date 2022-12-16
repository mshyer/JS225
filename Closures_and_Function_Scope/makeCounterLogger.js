// function makeCounterLogger(start) {
//   return function(stop) {
//     let prevStart = start;
//     if (stop > start) {
//       while (stop >= start) {
//         console.log(start);
//         start += 1;
//       }
//       start = prevStart;
//     } else if (stop < start) {
//       while (start >= stop) {
//         console.log(start);
//         start -= 1;
//       }
//       start = prevStart;
//     } else {
//       console.log(start);
//     }
//   };
// }

function makeCounterLogger(start) {
  return function(finish) {
    let i;

    if (start > finish) {
      for (i = start; i >= finish; i -= 1) {
        console.log(i);
      }
    } else {
      for (i = start; i <= finish; i += 1) {
        console.log(i);
      }
    }
  };
}
let countlog = makeCounterLogger(5);
countlog(8);

countlog(2);
