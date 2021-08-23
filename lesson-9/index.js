class User {
  constructor( firstName, lastName ) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
}

let user = new User('Artem', 'Flex');
console.log(user.fullName);

class Student extends User{
  constructor( firstName, lastName, admissionYear, courseName ){
    super( firstName, lastName );
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course(){
    return new Date().getFullYear() - this.admissionYear;
  }
}

let student = new Student('Leonid', 'Pug', 2010, 'pp');
console.log(student.course);

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class Students{
  constructor([studentsData]){
    this.firstName = studentsData.firstName;
    this.lastName = studentsData.lastName;
    this.admissionYear = studentsData.admissionYear;
    this.courseName = studentsData.courseName;
  }

  getInfo(){
    let fullName = this.firstName + ' ' + this.lastName;
    let course = new Date().getFullYear() - this.admissionYear;

    studentsData.sort((a, b) => a - b);
    return `${fullName} - ${this.courseName}, ${course} курс`;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
