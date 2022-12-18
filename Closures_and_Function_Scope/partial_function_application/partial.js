function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

function add(first, second) {
  return first + second;
}

function repeat(count, string) {
  return string.repeat(count);
}

let add4 = partial(add, 4);
console.log(add4(5));

let repeat7 = partial(repeat, 7);
console.log(repeat7('beans'));
