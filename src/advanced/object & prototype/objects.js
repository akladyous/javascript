console.log('---------------- OBJECTS ----------------');
const person = {
  firstName: 'john',
  lastName: 'doe',
};

const user = {
  email: 'alex@google.com',
  age: 20,
  parent: function () {
    console.log(this.name);
  },
};

// if (Object.isExtensible(person)) {
//   Object.setPrototypeOf(user, person);
// }
console.log('setPrototypeOf(person, user) -> add user to person.__proto__');
Object.setPrototypeOf(person, user);
console.log('person object  : ', person);
console.log(
  'person.email : ',
  person.email,
  ' still have access to person.__proto__',
);
console.log(
  'getPrototypeOf(person)            : ',
  Object.getPrototypeOf(person),
);
console.log('user.__proto__)                 : ', user.__proto__);
console.log(
  'getPrototypeOf(person)             : ',
  Object.getPrototypeOf(person),
);
console.log('person.__proto__)                  : ', person.__proto__);
console.log('user.isPrototypeOf(person)      : ', user.isPrototypeOf(person));
console.log('-------------- access object property --------------');
console.log(
  'getOwnPropertyDescriptors(user) : ',
  Object.getOwnPropertyDescriptors(user),
);
console.log(
  'getOwnPropertyDescriptors(person) : ',
  Object.getOwnPropertyDescriptors(person),
);
console.log(
  'getOwnPropertyNames(user)       : ',
  Object.getOwnPropertyNames(user),
);
console.log('-----------------------------------');
const o = Object.create(null);
console.log(
  'const o = Object.create(null)             : ',
  o,
  ' create an object null as prototype',
);
console.log('-----------------------------------');
