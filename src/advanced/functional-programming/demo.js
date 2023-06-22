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

function checkLimit(limit, item) {
  return item > limit;
}

function customBind(fn, context, ...args) {
  return function (...innerArgs) {
    return fn.apply(context, args.concat(innerArgs));
  };
}

$forEach(num1, (n) => {
  return n * 2;
});

function myCustomBind(context, fn, ...args) {
  return function (...innerArgs) {
    fn.apply(context, args.concat(innerArgs));
  };
}

const checkLimitByTwo = checkLimit.bind(null, 2);
const checkLimitTwoResult = $forEach(num1, checkLimitByTwo);
console.log(checkLimitTwoResult);

const checkLimitByIII = customBind(checkLimit, null, 3);
const checkLimitByIIIResult = $forEach(num1, checkLimitByIII);
console.log(checkLimitByIIIResult);

console.groupEnd();
