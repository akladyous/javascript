// https://stackoverflow.com/questions/5223/length-of-a-javascript-object
let lista = {
  name: 'paolo',
  age: 30,
};

Object.prototype.getLength = function () {
  return Object.keys(this).length;
};

Object.defineProperty(Object.prototype, 'length', {
  get: function () {
    return Object.keys(this).length;
  },
});
