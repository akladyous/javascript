let a1 = ['one', 'two', 'three', 'four', 'five'];
let a2 = ['six', 'seven', 'eight', 'nine', 'ten'];

let o1 = { one: 1, two: 2, three: 3, four: 4, five: 5 };
let o2 = { six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };

const ar1 = ['one', 'two', 'three', 'four', 'five', 'six'];
const ar2 = ['seven', 'eight', 'nine', 'ten'];
// ar1.forEach(item => item.toUpperCase());

ar1.forEach((item, index, array) => {
  console.log(`${item} : ${index}`);
});

const ar3 = ar1.concat(ar2);
console.log(ar3);

let nums = [...Array(5).keys()];
