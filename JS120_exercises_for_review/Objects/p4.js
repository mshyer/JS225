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

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();

// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
