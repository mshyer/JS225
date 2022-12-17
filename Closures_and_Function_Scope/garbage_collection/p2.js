function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
