function myBind(func, context) {
  return function(...args) {
    return func.apply(context, args);
  };
}

let boundMap = myBind(Array.prototype.map, this);
console.log(boundMap);
