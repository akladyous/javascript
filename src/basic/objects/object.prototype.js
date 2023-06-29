function foo(x) {
  this.x = x;
}
foo.prototype.y = 10;
foo.prototype.sum = function (z) {
  return this.x + this.y + z;
};
var t1 = new foo(10);
console.log(t1.sum(10));

// clouser
function baz() {
  var x = 1;
  return {
    increment: function () {
      return ++x;
    },
    decrement: function () {
      return --x;
    },
  };
}
var clouser = new baz();
console.log(clouser.increment(), clouser.decrement());
