function objectsEqual(obj1, obj2) {
  // Get the entries for obj 1 & obj 2
  // Check if all of the entries are in obj2, removing an entry each time
  //   -return false if any are not in obj2 (key and value)
  //    - if the key is in the second array:
  //      -let filtered = [get key and value]
  //      -if arr2.filter (pos 0 === key)
  //    -and the second value after the key is equal
  //      -check if filtered[1] equals the value we are checking for
  //   -return false if the lengths of the nested arrays are different
  // return true
  let pairs1 = Object.entries(obj1);
  let pairs2 = Object.entries(obj2);
  if (pairs1.length !== pairs2.length) {
    return false;
  }

  for (let idx = 0; idx < pairs1.length; idx += 1) {
    let filtered = pairs2.filter(pair => {
      return (pair[0] === pairs1[idx][0] &&
        pair[1] === pairs1[idx][1]);
    });
    if (filtered.length !== 1) {
      return false;
    }
  }

  return true;
}

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => key === bKeys[index]);
}

function valuesMatch(a, b) {
  const aKeys = Object.getOwnPropertyNames(a).sort();
  const isIterable = val => typeof val === 'object' && val !== null;
  return aKeys.every(key => {
    if (isIterable(a[key]) && isIterable(b[key])) {
      return valuesMatch(a[key], b[key]);
    }
    return a[key] === b[key];
  });
}




console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual(
  {a: ['cheddar', 'tomato'], b: 10}, 
  {a: ['cheddar', 'tomato'], b: 10}
                          ));
