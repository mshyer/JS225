// this points to the global scope (window).
function whatIsMyContext() {
  return this;
}
console.log(whatIsMyContext());
