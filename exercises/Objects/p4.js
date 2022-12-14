function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse({name, code}) {
      this.courses.push({name, code});
    },

    listCourses() {
      if (this.courses.length === 0) {
        console.log('no courses yet!');
      } else {
        console.log(this.courses);
      }
    },

    addNote(code, note) {
      let toNotify = this.courses.find(course => course['code'] === code);
      if (toNotify) {
        toNotify.note = toNotify.note ? toNotify.note + '; ' + note : note;
      }
    },

    updateNote(code, note) {
      let toNotify = this.courses.find(course => course['code'] === code);
      if (toNotify) {
        toNotify.note = note;
      }
    },

    viewNotes() {
      let notedCourses = this.courses.filter(course => course.note);
      notedCourses.forEach(course => {
        console.log(`${course.name}: ${course.note}`);
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
