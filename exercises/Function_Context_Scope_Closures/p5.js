function myBind(func, context, ...args) {
  return function(...futureArgs) {
    let fullArgs = args.concat(futureArgs);
    return func.apply(context, fullArgs);
  };
}

function add(n1, n2) {
  return n1 + n2;
}

let add5 = myBind(add, null, 5);
console.log(add5(6));
