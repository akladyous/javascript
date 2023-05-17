const memo = (fn) => {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn(...args);
    cache[args] = result;
    return result;
  };
};

const computionalMathFunc = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i === num) {
      return i;
    }
  }
};

console.time('2000_000_000 times');
console.log(computionalMathFunc(2000000000));
console.timeEnd('2000_000_000 times');
console.log('-'.repeat(50));
console.time('2000_000_000 times');
const useMemo = memo(computionalMathFunc);
console.log(useMemo(2000000000));
console.timeEnd('2000_000_000 times');
