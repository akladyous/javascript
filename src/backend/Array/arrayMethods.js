let oneToFive = ['one', 'two', 'three', 'four', 'five'];
let sixToTen = ['six', 'seven', 'eight', 'nine', 'ten'];
let o1 = { one: 1, two: 2, three: 3, four: 4, five: 5 };
let o2 = { six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };

const ar1 = ['one', 'two', 'three', 'four', 'five', 'six'];
const ar2 = ['seven', 'eight', 'nine', 'ten'];

let nums = [...Array(5).keys()];

const alphabets = Array.from([...Array(26).keys()], (n) =>
  String.fromCharCode(n + 65),
);
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

console.log('alphabets : ', alphabets);
