function objectsEqual(obj1, obj2) {
  // Get keys for obj1 (This is own properties)
  // If the length of keys is not the same for 2 objects, return false
  // Then return if every is the same
  let obj1Keys = Object.keys(obj1);
  if (obj1Keys.length !== Object.keys(obj2).length) {
    return false;
  }
  return obj1Keys.every(key => {
    return obj1[key] === obj2[key] && obj2.hasOwnProperty(key);
  });
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
