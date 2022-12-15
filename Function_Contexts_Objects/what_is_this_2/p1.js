let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

console.log(myObject.myChildObject.myMethod.call(myObject));
