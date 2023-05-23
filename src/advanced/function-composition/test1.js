const compose =
  (...functions) =>
  (...args) =>
    functions.forEach((fn) => fn?.(...args));

const add = (x) => (y) => x + y;
const addX = add(1);
const addY = addX(1);
console.log(addY);
