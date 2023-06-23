// import { todos } from '../data/todos';
let o1 = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
};

const alphabets = Array.from([...Array(26).keys()], (n) =>
  String.fromCharCode(n + 65),
);
let words = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];
let nums = [...Array(10).keys()];

// find -> find `first element` else `undefined`
let firstElement = numWords.find((w) => w === 'one');
console.log('find first element else `undefined` : ', firstElement);

const splitArray = (array = [], cb) => {
  var midpoint = Math.ceil(array.length / 2);
  var firstHalf = array.slice(0, midpoint);
  var secondHalf = array.slice(midpoint);

  return [firstHalf, secondHalf];
};

const generateEvenNumbers = (length) => {
  const evenNums = [];
  for (let i = 2; i <= length; i += 2) {
    evenNums.push(i);
  }
  return evenNums;
};
const generateOddNumbers = (length) => {
  const oddNumbers = new Array();
  for (let i = 0; i < length; i++) {
    if (i % 2 !== 0) oddNumbers.push(i);
  }
  return oddNumbers;
};
const isEven = (number) => number % 2 === 0;
const isOdd = (number) => number % 2 !== 0;

const evenNumbers = generateEvenNumbers(10);
console.log(
  'every : ',
  evenNumbers.every((num) => num % 2 === 0, evenNumbers),
);

const oddNumbers = generateOddNumbers(20);
console.log(
  'every : ',
  oddNumbers.every((num) => num % 2 !== 0),
);
const rangeOfTen = [...Array(10).keys()];
console.log('some : ', rangeOfTen.some(isEven));

console.log('indexOf : ', numWords.indexOf('ten'));
console.log('-'.repeat(50));

console.log('Sparse Array');
const sparse1 = [10, 20, , , , 60];
console.log('[10, 20, , , , 60].length : ', sparse1.length);
console.log(' ');
sparse1.forEach((n) => console.log('[10, 20, , , , 60].forEach : ', n));
console.log(' ');
console.log('[...sparse1] spread operator', [...sparse1]);
console.log(' ');
console.log('Object.keys(sparse1) : ', Object.keys(sparse1));
console.log(
  'sparse1.filter(() => true) : ',
  sparse1.filter(() => true),
);
console.log('sparse1.flat() : ', sparse1.flat());
console.log(
  '[10, 20, , , , 60].some((n) => !n) : ',
  sparse1.some((n) => !n),
  "-> It has no Falsy value, they just does't exists!!",
);
console.log(' ');
console.log([1, 2, undefined, 4, undefined, 6].every(Boolean));
console.log([1, 2, undefined, 4, undefined, 6].some((n) => !n));
console.log([1, 2, null, 4, null, 6].some((n) => !n));
