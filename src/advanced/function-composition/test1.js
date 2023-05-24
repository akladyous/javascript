const compose =
  (...functions) =>
  (...args) =>
    functions.forEach((fn) => fn?.(...args));

const add = (x) => (y) => x + y;
const square = (x) => x * x;
const double = (x) => x * 2;

// Compose the functions
const composedFn = compose(
  add(5), // Add 5 to the argument
  square, // Square the result
  double, // Double the result
);

// Call the composed function
const result = composedFn(3);
console.log(result);
