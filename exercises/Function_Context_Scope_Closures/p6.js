function myFilter(array, func, context = this) {
  let result = [];

  array.forEach(value => {
    if (func.call(context, value)) {
      result.push(value);
    }
  });

  return result;
}
