const person = {
  firstName: 'john',
  lastName: 'doe',
};
console.log('person object : ', person);

const user = {
  email: 'alex@google.com',
  parent: function () {
    console.log(this.name);
  },
};
console.log('user object : ', user);
console.log('');

console.log('setPrototypeOf(user, person) is equivalent to  person.__proto__');
Object.setPrototypeOf(user, person);
console.log('');

console.log('user object still have access to person.__proto__ ');
console.log('user.firstName : ', user.firstName);
console.log('');

console.log('Access user [[prototype]]');
console.log('Object.getPrototypeOf(user) : ', Object.getPrototypeOf(user));
console.log('the same as :');
console.log('user.__proto__              :', user.__proto__);
console.log('');

console.log('Person object become the prototype of user obejct');
console.log('person.isPrototypeOf(user) : ', person.isPrototypeOf(user));
