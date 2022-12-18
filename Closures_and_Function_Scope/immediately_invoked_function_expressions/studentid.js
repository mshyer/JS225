let studentId = 0;


let generateStudentId = (function() {
  let studentId = 0;

  return function() {
    studentId += 1;
    return studentId;
  };
})();

console.log(generateStudentId());
console.log(generateStudentId());
