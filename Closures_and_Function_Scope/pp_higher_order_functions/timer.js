function timed(func) {
  return function() {
    let start = new Date();
    func();
    let stop = new Date();
    console.log((stop - start).toString() + ' ms have elapsed');
  };
}


let logBees = function() {
  for (let idx = 100; idx > 0; idx--) {
    console.log('bees!');
  }
  let i = 1000000000;
  while (i > 0) {
    i -= 1;
    continue;
  }
};

// logBees();

let timedBees = timed(logBees);
timedBees();
