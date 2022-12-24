// IIFE for the Account object
// returns an object representing a new customer
//

let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;


  function generateDisplayName() {
    let sequence = '';
    const POSSIBLE_CHARS = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
      'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
      'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4',
      '5', '6', '7', '8', '9', '0'
    ];
    const STRING_LENGTH = 16;
    for (let idx = 0; idx < STRING_LENGTH; idx += 1) {
      let randIdx = Math.floor(Math.random() * POSSIBLE_CHARS.length);
      sequence += POSSIBLE_CHARS[randIdx];
    }
    return sequence;
  }

  return {
    init(email, password, firstName, lastName) {
      userFirstName = firstName;
      userLastName = lastName;
      userEmail = email;
      userPassword = password;
      this.displayName = generateDisplayName();
      this.validPass = function(pass) {
        return pass === password;
      };
      return this;
    },

    reanonymize: function(pass) {
      if (this.validPass(pass)) {
        this.displayName = generateDisplayName();
        return true;
      }
      return 'Invalid Pass';
    },

    email: function(pass) {
      if (this.validPass(pass)) {
        return userEmail;
      }
      return 'Invalid Password';
    },

    firstName: function(pass) {
      if (this.validPass(pass)) {
        return userFirstName;
      } else {
        return 'Invalid Password';
      }
    },

    lastName: function(pass) {
      if (this.validPass(pass)) {
        return userLastName;
      }
      return 'Invalid Pass';
    },

    resetPassword: function(currentPass, newPass) {
      if (this.validPass(currentPass)) {
        userPassword = newPass;
        return true;
      }
      return 'Invalid Password';
    },
  };
}());
let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
