// function Animal(name, age) {
//   this.name = name;
//   this.age = age;
// }

const person = {
  firstName: 'john',
  lastName: 'doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

const user = {
  email: 'john_doe@gmail.com',
  password: '123',
};

user.__proto__ = person;
// is equivalent to:
Object.setPrototypeOf(user, person);
console.log(user.fullName());
