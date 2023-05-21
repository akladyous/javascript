export const generateRandomIntegerList = (length, min, max) => {
  const randomNumbers = new Array();

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNumbers.push(randomNumber);
  }
  return randomNumbers;
};

console.log(generateRandomIntegerList(10, 1, 5));
