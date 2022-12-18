function makeStack () {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
      return stack.length;
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach(item => console.log(item));
    },
  };
}

let myStack = makeStack();

myStack.printStack();
myStack.push('Doggo');
myStack.push('Fat Cat');
myStack.printStack();
myStack.pop();
myStack.printStack();
