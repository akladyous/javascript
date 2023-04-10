console.log('---------------- OBJECTS ----------------');
const person = {
  firstName: 'john',
  lastName: 'doe',
};
const profile = {
  email: 'alex@google.com',
  age: 20,
  parent: function () {
    console.log(this.name);
  },
};
// if (Object.isExtensible(person)) {
//   Object.setPrototypeOf(profile, person);
// }
Object.setPrototypeOf(profile, person);

console.log('person object  : ', person);
console.log('profile object : ', profile);
console.log('profile.firstName : ', profile.firstName);
console.log('getPrototypeOf(profile)            : ', Object.getPrototypeOf(profile));
console.log('getPrototypeOf(person)            : ', Object.getPrototypeOf(person));
console.log('profile.__proto__)                        : ', profile.__proto__);
console.log('person.isPrototypeOf(profile)             : ', person.isPrototypeOf(profile));
console.log(
  'Object.getOwnPropertyDescriptors(profile) : ',
  Object.getOwnPropertyDescriptors(profile)
);
console.log('getOwnPropertyNames(profile)       : ', Object.getOwnPropertyNames(profile));
console.log('-----------------------------------');
const o = Object.create(null);
console.log(
  'const o = Object.create(null)             : ',
  o,
  ' create an object null as prototype'
);
console.log('-----------------------------------');
const obj1 = {};
console.log('const obj1 = {}                           : ', o, ' create an object');
const obj2 = Object.create(Object.prototype);
console.log(
  'obj2 = Object.create(Object.prototype)    : ',
  o,
  ' is equivalent to ->  const obj1 = {}'
);
