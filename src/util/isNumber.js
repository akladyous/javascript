#!/usr/bin/env node
function isNumber(num) {
  debugger;
  if (typeof num === 'number') {
    return num - num === 0;
  }
  if (typeof num === 'string' && num.trim() !== '') {
    return Number.isFinite ? Number.isFinite(+num) : isFinite(+num);
  }
  return false;
}

const test1 = isNumber(5e3); // true
const test2 = isNumber(Infinity); // false
console.log(test1, test2);
//
console.log(isNumber(0xff)); // true
console.log(isNumber(-1.1)); // true
console.log(isNumber(0)); // true
console.log(isNumber(1)); // true
console.log(isNumber(1.1)); // true
console.log(isNumber(10)); // true
console.log(isNumber(10.1)); // true
console.log(isNumber(100)); // true
console.log(isNumber('-1.1')); // true
console.log(isNumber('0')); // true
console.log(isNumber('012')); // true
console.log(isNumber('0xff')); // true
console.log(isNumber('1')); // true
console.log(isNumber('1.1')); // true
console.log(isNumber('10')); // true
console.log(isNumber('10.10')); // true
console.log(isNumber('100')); // true
console.log(isNumber('5e3')); // true
console.log(isNumber(parseInt('012'))); // true
console.log(isNumber(parseFloat('012'))); // true
console.log(isNumber(Infinity)); // false
console.log(isNumber(NaN)); // false
console.log(isNumber(null)); // false
console.log(isNumber(undefined)); // false
console.log(isNumber('')); // false
console.log(isNumber('   ')); // false
console.log(isNumber('foo')); // false
console.log(isNumber([1])); // false
console.log(isNumber([])); // false
console.log(isNumber(function () {})); // false
console.log(isNumber({})); // false
