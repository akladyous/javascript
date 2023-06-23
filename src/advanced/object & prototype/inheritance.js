console.group('Inheritance');

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
Person.prototype.status = false;

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
Person.prototype.login = function (password) {
  if (password === '123') {
    this.status = true;
    console.log('login successfully completed');
    return null;
  } else {
    this.status = false;
    console.log('login faild to completed');
    return null;
  }
};

const john = new Person('john', 'doe', 19);
const sara = new Person('sara', 'johnson', 18);

console.log(john);
console.log(sara);
console.log(sara.fullName());

function Account(...args) {
  const role = args.pop();
  Person.call(this, ...args);
  this.role = role;
}

const will = new Account('will', 'smith', 21, 'admin');
Account.prototype.info = function () {
  return `${this.firstName} ${this.lastName} ${this.age} ${this.role}`;
};

Account.prototype = Object.create(Person.prototype);
Account.prototype.constructor = Account;

subClass.prototype = Object.create(superClass && superClass.prototype, {
  constructor: {
    value: Account,
    writable: true,
    configurable: true,
  },
});

console.log(will);

console.log('Account.prototype : ', Account.prototype);
console.log('Account.__proto__ : ', Account.__proto__);
console.log('will.__proto__ : ', will.__proto__);
console.groupEnd();

// ------------------------------------------------------------------------------
let x = [1, 2, 3];
x.findIndex(3);
