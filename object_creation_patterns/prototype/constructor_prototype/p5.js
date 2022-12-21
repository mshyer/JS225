let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword());
// Objects instantiated from constructor functions have prototypes
// Of the function's prototype object. In this case, that object is 
// Different on line 6 than on line 8, when the function prototype is
// Reaassigned. After the function prototype is reassigned, future
// Objects will use it as their prototypal ancestor, however the objects
// Already instantiated by the function (such as ninja), will maintain
// A reference to the previous object, which will not be garbage collected.
// Therefore, swingSword is never defined in the previous object, and
// The code will output an error, after tring to call undegined as a function.
