let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();
