function createStudent(name, year, id) {
  return {
    id,
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

    getCourseGrade(name) {
      let course = this.courses.filter(course => course.name === name)[0];
      if (course) {
        return course.grade;
      }
      return undefined;
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

const school = {
  students: [],
  IDs: [],

  nextID() {
    let id = this.IDs.length === 0 ? 0 : Math.max(...this.IDs) + 1;
    this.IDs.push(id);
    return id;
  },

  validYear(year) {
    return (
      year === '1st' ||
      year === '2nd' ||
      year === '3rd' ||
      year === '4th' ||
      year === '5th' );
  },

  addStudent(name, year, id = this.nextID()) {
    if (this.validYear(year)) {
      this.students.push(createStudent(name, year, id));
    }
  },

  enrollStudent(id, name, code) {
    let student = this.students.filter(stud => stud.id === id)[0];
    if (student) {
      student.addCourse({name, code});
    }
  },

  addGrade(id, grade, code) {
    let student = this.students.filter(stud => stud.id === id)[0];
    let course = student.courses.find(course => course.code === code);
    if (course) {
      course.grade = grade;
    } else {
      console.log('no course found');
    }
  },

  getReportCard(id) {
    let student = this.students.filter(stud => stud.id === id)[0];
    if (!student) {
      console.log('no student found with that code');
    } else if (student.courses.length === 0) {
      console.log(`student ${student.name} is not enrolled in any courses yet`);
    } else {
      console.log('Report card for: ' + student.name);
      student.courses.forEach(course => {
        console.log('Course: ' + course.name + ' Grade: ' +
          (course.grade ? course.grade : 'In progress.'));
      });
      console.log();
    }
  },

  courseReport(name) {
    let enrolledStudents = this.students.filter(student => {
      return student.courses.some(
        course => course.name === name && course.grade);
    });
    console.log(`=${name} grades=`);
    if (enrolledStudents.length === 0) {
      return console.log('No grades to report yet');
    }
    let grades = [];
    enrolledStudents.forEach(student => {
      let grade = student.getCourseGrade(name);
      grades.push(grade);
      console.log(student.name + ': ' + grade);
    });
    console.log('---');
    console.log('Course Average: ' +
      (grades.reduce((sum, grade) => sum + grade) / grades.length));
  },

};

school.addStudent('foo', '3rd');
console.log(school.students);
school.enrollStudent(0, 'Math', 101);
school.enrollStudent(0, 'Advanced Math', 102);
school.enrollStudent(0, 'Physics', 202);
school.addGrade(0, 95, 101);
school.addGrade(0, 90, 102);
console.log(school.students[0].courses);

school.addStudent('bar', '1st');
school.enrollStudent(1, 'Math', 101);
school.addGrade(1, 91, 101);

school.addStudent('qux', '2nd');
school.enrollStudent(2, 'Math', 101);
school.enrollStudent(2, 'Advanced Math', 102);
school.addGrade(2, 93, 101);
school.addGrade(2, 90, 102);

school.getReportCard(0);
school.getReportCard(1);
school.getReportCard(2);

school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

