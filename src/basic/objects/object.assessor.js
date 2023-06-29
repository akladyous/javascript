// defineProperty with a data property descriptor
var o = {};
Object.defineProperty(o, 'p', {
  value: 222,
  writable: false,
  configurable: true,
  enumerable: true,
});
try {
  o.p = 10;
  console.log(o.p);
  console.log(Object.getOwnPropertyDescriptor(o, 'p'));
} catch (error) {
  console.log(error.message);
}

// Object.defineProperty(
var product = { v: 10 };
var test = 5;
Object.defineProperty(product, 'price', {
  value: 100,
  writable: true,
});
Object.defineProperty(product, 'discount', {
  get() {
    return this.price * 0.1;
  },
});

console.log(product.discount);

// counter example
var counter = { val: 0 };
Object.defineProperty(counter, 'reset', {
  get() {
    return (this.val = 0);
  },
});

Object.defineProperty(counter, 'increment', {
  get() {
    this.val++;
    return this.val;
  },
});
Object.defineProperty(counter, 'decrement', {
  get() {
    this.val--;
    return this.val;
  },
});
Object.defineProperty(counter, 'add', {
  set(value) {
    this.val += value;
    return this.val;
  },
});
Object.defineProperty(counter, 'subtract', {
  set(value) {
    this.val -= value;
    return this.val;
  },
});

console.log('---------------------------------------');
console.log(`counter reset : ${counter.reset}`);
console.log(`counter increment : ${counter.increment}`);
console.log(`counter decrement : ${counter.decrement}`);
console.log(`counter add : ${(counter.add = 10)}`);
console.log(`counter subtract : ${(counter.subtract = 5)}`);
console.log(counter.val);
