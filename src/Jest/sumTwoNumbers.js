export const sumTwoNumbers = (a, b) => {
  if (parseInt(a) < 0 || parseInt(b) < 0) {
    throw new Error('Error: only positive integers');
  }
  return a + b;
};

// module.exports = sumTwoNumbers;
