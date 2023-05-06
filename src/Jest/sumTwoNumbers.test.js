const sumTwoNumbers = require('./sumTwoNumbers');

test('return the sum of two numbers', () => {
  expect(sumTwoNumbers(1, 2).toBe(3));
});
