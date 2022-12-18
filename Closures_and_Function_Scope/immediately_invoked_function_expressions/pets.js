// lots of messy code

var myPet = {
  type: 'Dog',
  name: 'Spot',
};

console.log(`I have pet ${myPet.type} named ${myPet.name}.`);

// more messy code
// I suppose in messy pre-es6 code,
// The myPet object would create a property of the global object
// Which might clutter the global object... Ah, it seems also 
// we are dealing with uncertainty. We don't know if there already exists
// a myPet object.

function createAndLogPet() {
  var myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}.`);
}

createAndLogPet();
// Subtle problem: Well, we have to run it now. Maybe that's the problem?
// Now we are creating yet another variable in the global scope which adds
// Clutter to our already cluttered global scope.

(function() {
  var myPet = {
    type: 'Dog',
    name: 'Spot',
  };

  console.log(`I have pet ${myPet.type} named ${myPet.name}.`);
})();
