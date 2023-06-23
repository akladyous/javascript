const o = {
  a: 1,
  b: 2,
  __proto__: {
    b: 22,
    c: 3,
  },
};

console.log(o.a);
console.log(o.b);
console.log(o.c);
