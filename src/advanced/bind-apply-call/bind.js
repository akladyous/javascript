'strict mode';
console.log('---------------------- BIND ----------------------------');
console.group('example 1');
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const unboundGetX = module.getX;
console.log(
  `unboundGetX()\t\t ${unboundGetX()} <- The function gets invoked at the global scope expected output: undefined`,
);
const boundGetX = unboundGetX.bind(module);
console.log(`boundGetX()\t\t\t ${boundGetX()} <- expected output: 42 `);
console.groupEnd();
// ------------------------------------------------------------------
console.group('example 2');
function test() {
  console.log('value of this passed from bind method is:  ', this);
  console.log(
    'arguments passed from bind method are:     ',
    Array.prototype.slice.call(arguments),
  );
}
const bound = test.bind({ name: 'test' }, 1, 2);
bound(3);
console.groupEnd();
// ------------------------------------------------------------------
console.group('example 3');
const user = {
  firstName: 'will',
  lastName: 'smith',
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  sayHello: function (something) {
    console.log(`hello ${this.firstName} ${something}`);
  },
};
user.sayHello('how are you?');
console.groupEnd();
// ------------------------------------------------------------------
console.group('example 4');
function list() {
  return Array.prototype.slice.call(arguments);
}
const list1 = list(1, 2, 3);
const list2 = list.bind(null, 31);
console.log(list2());
console.groupEnd();
// ------------------------------------------------------------------
