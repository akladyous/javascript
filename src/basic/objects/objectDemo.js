let people = {
  firstName: 'john',
  lastName: 'doe',
  f1: function () {
    return `fullname ${this.firstName} ${this.lastName}`;
  },
};
Object.defineProperty(people, 'age', {
  value: 18,
  writable: true,
  configurable: true,
  enumerable: true,
});

console.log(Object.getOwnPropertyDescriptor(people, 'firstName'));
console.log(Object.getOwnPropertyDescriptors(people));

let l1 = [2, 4, 6, 8, 10];

for (let x in l1) {
  console.log(`Array l1 at index ${x} = ${l1.at(x)}`);
}
var it = l1[Symbol.iterator]();
console.log('array iterator : ', it);
