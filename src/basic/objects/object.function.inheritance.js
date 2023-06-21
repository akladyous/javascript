function People(first, last, gender) {
  this.first = first;
  this.last = last;
  this.gender = gender;
  this.name = `${first} ${last}`;
}

function Teacher(first, last, gender, subject) {
  People.call(this, first, last, gender);
  this.subject = subject;
}
Teacher.prototype.race = 'white';
Teacher.prototype.mansion = function () {
  return this.subject.toUpperCase();
};

var john = new People('John', 'Doe', 'male');
var mary = new Teacher('Mary', 'Smith', 'Female', 'math');
mary.race = 'black';

console.log(john.name);
console.log(mary.mansion());
console.log(mary.race);

// console.log(john.constructor);
console.log(mary.hasOwnProperty('race'));
