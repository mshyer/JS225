
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`Student: ${this.name}, Year: ${this.year}`);
    },
    addCourse(courseObj) {
      this.courses.push(courseObj);
    },
    listCourses() {
      console.log('Student ' + this.name + ' is enrolled in the following courses: ');
      this.courses.forEach(course => console.log(`Course: ${course.name}, Code: ${course.code}`));
    },
    courseFromCode(code) {
      return this.courses.find(course => course.code === code);
    },

    addNote(code, note) {
      let course = this.courseFromCode(code);
      course.note = course.note ? course.note + note : note;
      console.log('note added');
    },

    updateNote(code, note) {
      let course = this.courseFromCode(code);
      course.note = note;
      console.log('note updated');
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.hasOwnProperty('note')) {
          console.log(course.note);
        }
      });
    },
  };
}

const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];
const school = {
  students: [],
  addStudent(name, year) {
    if (VALID_YEARS.includes(year.toLowerCase())) {
      let newStudent = createStudent(name, year);
      this.students.push(newStudent);
      return newStudent;
    } else {
      return console.log('Invalid Year');
    }
  },
  enrollStudent() {
  }

};
