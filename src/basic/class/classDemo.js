class Person {
  name;
  age;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  info() {
    return `First Name: ${this.firstName} Last Name: ${this.lastName}`;
  }
}

class Student extends Student {
  #initialGPA = 0;

  constructor(courses) {
    super(firstName, lastName);
    this.courses = courses;
    this._gpa = 0;
  }

  grade() {
    return Math.floor(Math.random() * (5 - 1) + 1);
  }

  gpa() {
    return this._gpa;
  }
}
