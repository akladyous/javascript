const users = [
  { name: 'alex', age: 18 },
  { name: 'john', age: 19 },
  { name: 'mary', age: 20 },
];
const valueObj = { ...Array.from(Array(5).keys()) };
console.log(valueObj);
console.log({ ...users });

const valueObj2 = {
  ...users.map((key) => [key, key]).flat(),
};
console.log(valueObj2);

console.log(users.map((user, index) => [index, user]).flat());
/*
[
  0,
  { name: 'alex', age: 18 },
  1,
  { name: 'john', age: 19 },
  2,
  { name: 'mary', age: 20 },
];
*/
