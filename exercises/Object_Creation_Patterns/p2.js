// delegate function takes inputs
// INPUT: object to delegate to
//        -name of method as string
//        -any arguments
// OUTPUT: an unbound function... 
// Algorithm: Use object bracket notation with the name string
// return obj[methodName].call(this, args)

function delegate(obj, fName, ...args) {
  return function() {
    return obj[fName].apply(obj, args);
  };
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = () => { console.log('changed'); };

baz.qux();          // logs 'changed'
