(function() {
  const _ = function(...args) {
    return {
      first() {
        return args[0][0];
      },
      last() {
        return args[0][args[0].length - 1];
      },

      without(...vals) {
        let dup = args[0].slice();
        vals.forEach(val => {
          dup = dup.filter(ele => ele !== val);
        });
        return dup;
      },

      range(...args) {
        if (args.length === 1) {
          return Array.from({length: args[0]}, (_, idx) => idx);
        } else if (args.length === 2) {
          return Array.from({length: args[1] - args[0]}, (_, idx) => idx + args[0]);
        } else {
          return console.log('range error');
        }
      },

      lastIndexOf(ele) {
        for (let idx = args[0].length - 1; idx >= 0; idx -= 1) {
          if (args[0][idx] === ele) {
            return idx;
          }
        }
      },

      sample(count = 1) {
        if (count === 1) {
          return args[0][Math.floor(Math.random() * args[0].length)];
        }
        let sample = new Set();
        while ( sample.size < count ) {
          let randIdx = Math.floor(Math.random() * args[0].length);
          sample.add(args[0][randIdx]);
        }
        return Array.from(sample);
      },

      findWhere(obj) {
        let arr = args[0];
        let keys = Object.keys(obj);
        for (let idx = 0; idx < arr.length; idx += 1) {
          if (keys.every(key => arr[idx][key] === obj[key])) {
            return arr[idx];
          }
        }
        return;
      },

      where(obj) {
        let objects = args[0];
        let matches = [];
        let keys = Object.keys(obj);
        for (let idx = 0; idx < objects.length; idx += 1) {
          if (keys.every(key => objects[idx][key] === obj[key])) {
            matches.push(objects[idx]);
          }
        }
        return matches;
      },

      pluck(key) {
        let plucked = [];
        let objects = args[0];
        for (let idx = 0; idx < objects.length; idx += 1) {
          if (objects[idx].hasOwnProperty(key)) {
            plucked.push(objects[idx][key]);
          }
        }
        return plucked;
      },

      keys() {
        let obj = args[0];
        let keys = [];
        for (let key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.push(key);
          }
        }
        return keys;
      },

      values() {
        let obj = args[0];
        let values = [];
        for (let key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            values.push(obj[key]);
          }
        }
        return values;
      },

      pick(...properties) {
        let obj = args[0];
        let newObj = {};
        properties.forEach(prop => {
          if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
          }
        });
        return newObj;
      },
      omit(...properties) {
        let obj = args[0];
        let newObj = {};
        let selectKeys = Object.keys(obj).filter(key => !properties.includes(key));
        selectKeys.forEach(key => {
          newObj[key] = obj[key];
        });
        return newObj;
      },

      has(property) {
        let obj = args[0];
        return Object.prototype.hasOwnProperty.call(obj, property);
      },

      isElement() {
        let obj = args[0];
        return Element.prototype.isPrototypeOf(obj);
      },
      isArray() {
        let obj = args[0];
        return Array.prototype.isPrototypeOf(obj);
      },
      isObject() {
        let item = args[0];
        return Object.prototype.isPrototypeOf(item);
      },

      isFunction() {
        let item = args[0];
        return Function.prototype.isPrototypeOf(item);
      },

      isBoolean() {
        let item = args[0];
        return typeof item === 'boolean' || Boolean.prototype.isPrototypeOf(item);
      },

      isString() {
        let item = args[0];
        return typeof item === 'string' || String.prototype.isPrototypeOf(item);
      },

      isNumber() {
        let item = args[0];
        return typeof item === 'number' || Number.prototype.isPrototypeOf(item);
      },
    };
  };
  window._ = _;
})();

_.range = _().range;
window._.extend = function(...objs) {
  if (objs.length === 2) {
    let keys = Object.keys(objs[1]);
    for (let idx = 0; idx < keys.length; idx += 1) {
      objs[0][keys[idx]] = objs[1][keys[idx]];
    }
    return objs[0];
  }
  return window._.extend(...objs.slice(1));
};

window._.isElement = function(obj) {
  return Element.prototype.isPrototypeOf(obj);
};
_.isObject = function(item) {
  return _(item).isObject();
};

_.isArray = function(obj) {
  return _(obj).isArray();
};

_.isFunction = function(item) {
  return _(item).isFunction();
};

_.isBoolean = function(item) {
  return _(item).isBoolean();
};

_.isString = function(item) {
  return _(item).isString();
};

_.isNumber = function(item) {
  return _(item).isNumber();
};
