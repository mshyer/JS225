let _ = ((...args) => {
  return {
    first() {
      return args[0].shift();
    },

    last() {
      return args[0].pop();
    },

    without(...removes) {
      let arr = args[0];
      removes.forEach(toRemove => {
        arr = arr.filter(ele => ele !== toRemove);
      });
      return arr;
    },
    range(...values) {
      if (values[1] === undefined) {
        return Array.from({length: values[0]}, (_, idx) => idx);
      } else {
        return Array.from({length: (values[1] - values[0])}, (_, idx) => values[0] + idx);
      }
    },
    lastIndexOf(value) {
      return args[0].lastIndexOf(value);
    },

    sample(sampleSize) {
      let setLength = sampleSize ? sampleSize : 1;
      let mySet = new Set();
      while (mySet.size < setLength) {
        let randIndex = Math.floor(Math.random() * args[0].length);
        mySet.add(args[0][randIndex]);
      }
      let result = Array.from(mySet);
      return result.length === 1 ? result[0] : result;
    },

    findWhere(testObj) {
      return args[0].find(arrObj => {
        return Object.keys(testObj).every(key => testObj[key] === arrObj[key]);
      });
    },

    where(testObj) {
      return args[0].filter(arrObj => {
        return Object.keys(testObj).every(key => testObj[key] === arrObj[key]);
      });
    },

    pluck(key) {
      let plucked = [];
      args[0].forEach(obj => {
        if (obj[key] !== undefined) {
          plucked.push(obj[key]);
        }
      });
      return plucked;
    },

    keys() {
      return Object.keys(args[0]);
    },

    values() {
      return Object.values(args[0]);
    },

    extend(...objects) {
      if (objects.length === 1) {
        console.log('haha');
        console.log(objects[0]);
        return objects[0];
      }
      Object.keys(objects[objects.length - 1]).forEach(key => {
        objects[objects.length - 2][key] = objects[objects.length - 1][key];
      });
      return _().extend(...objects.slice(0, -1));
    },

    pick(...properties) {
      let newObj = {};
      properties.forEach(prop => {
        newObj[prop] = args[0][prop];
      });
      return newObj;
    },

    omit(...properties) {
      let newObj = {};
      Object.keys(args[0]).forEach(key => {
        if (!properties.includes(key)) {
          newObj[key] = args[0][key];
        }
      });
      return newObj;
    },

    has(prop) {
      return Object.prototype.hasOwnProperty.call(args[0], prop);
    },
    
    isElement(arg) {
      console.log(arg.constructor);
      return HTMLElement.prototype.isPrototypeOf(arg);
    },

    isArray(arg) {
      return Array.isArray(arg);
    },

    isObject(arg) {
      return typeof arg === 'object' || typeof arg === 'function';
    },

    isFunction(arg) {
      return typeof arg === 'function';
    },

    isBoolean(arg) {
      return typeof arg === 'boolean' || arg.constructor === Boolean;
    },
    
    isString(arg) {
      return typeof arg === 'string' || arg.constructor === String;
    },

    isNumber(arg) {
      return typeof arg === 'number' || arg.constructor === Number;
    },



  };
});

_.range = _().range;
_.extend = _().extend;
_.isElement = _().isElement;
_.isArray = _().isArray;
_.isObject = _().isObject;
_.isFunction = _().isFunction;
_.isBoolean = _().isBoolean;
_.isString = _().isString;
_.isNumber = _().isNumber;
console.log(_);
