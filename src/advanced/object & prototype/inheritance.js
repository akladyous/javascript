console.group('Inheritance');

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const john = new Person('john', 'doe', 19);
const sara = new Person('sara', 'johnson', 18);

console.log(john);
console.log(sara);

function Account(...args) {
  const role = args.pop();
  Person.call(this, ...args);
  this.role = role;
}

const will = new Account('will', 'smith', 21, 'admin');
Account.prototype = Object.create(Person.prototype);
Account.prototype.constructor = Account;

console.log(will);
console.groupEnd();

// ------------------------------------------------------------------------------
