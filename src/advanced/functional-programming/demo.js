console.group('demo');

const num1 = [...Array(10).keys()];

const $forEach = function (arr, fn) {
  const newArray = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const result = fn(arr[i]);
    newArray.push(result);
  }
  return newArray;
};
function multiply(a, b) {
  return a * b;
}

$forEach(num1, (n) => {
  console.log('current Number : ', n);
  return n * 2;
});
function checkLimit(limit, item) {
  return item > limit;
}
const checkLimitByTwo = checkLimit.bind(null, 2);

const checkLimitResult = $forEach(num1, checkLimitByTwo);
console.log(checkLimitResult);

console.groupEnd();
