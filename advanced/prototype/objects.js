console.log('---------------- OBJECTS ----------------');
const user = {
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
// if (Object.isExtensible(user)) {
//   Object.setPrototypeOf(profile, user);
// }
Object.setPrototypeOf(profile, user);

console.log('user object  : ', user);
console.log('profile object : ', profile);
console.log('profile.firstName : ', profile.firstName);
console.log('getPrototypeOf(profile)            : ', Object.getPrototypeOf(profile));
console.log('profile.__proto__)                 : ', profile.__proto__);
console.log('getPrototypeOf(user)             : ', Object.getPrototypeOf(user));
console.log('user.__proto__)                  : ', user.__proto__);
console.log('user.isPrototypeOf(profile)      : ', user.isPrototypeOf(profile));
console.log('getOwnPropertyDescriptors(profile) : ', Object.getOwnPropertyDescriptors(profile));
console.log('getOwnPropertyDescriptors(user) : ', Object.getOwnPropertyDescriptors(user));
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
