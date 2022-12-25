function logIt(string) {
  console.log(string);
}

function insult(string) {
  console.log(string + ' is so boring!');
}
// module.exports = logIt;
//
module.exports = {
  logIt,
  insult,
};
