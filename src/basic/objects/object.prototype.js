function foo(x) {
  this.x = x;
}
foo.prototype.y = 10;
foo.prototype.sum = function (z) {
  return this.x + this.y + z;
};
var t1 = new foo(10);
console.log(t1.sum(10));

function baz() {
  var x = 1;
  return {
    foo: function foo() {
      return ++x;
    },
    bar: function bar() {
      return --x;
    },
  };
}
var clouser = new baz();
console.log(clouser.foo(), clouser.bar());
