const user = {
  firstName: 'john',
  lastName: 'doe',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log('-------------- access object property --------------');
console.log(
  'getOwnPropertyDescriptors(user) : ',
  Object.getOwnPropertyDescriptors(user),
);
console.log('');

console.log(
  'getOwnPropertyNames(user)       : ',
  Object.getOwnPropertyNames(user),
);
console.log('');
const o = Object.create(null);
console.log(
  'const o = Object.create(null)             : ',
  o,
  ' create an object null as prototype',
);
console.log('-----------------------------------');
