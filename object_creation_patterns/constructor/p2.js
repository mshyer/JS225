function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = Lizard();
lizzy.scamper(); // ?
// error undefined is not a function
// We called Lizard without the new operator
// and so the properties are created on the global object
// and lizzy returns value of undefined.
