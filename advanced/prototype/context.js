{
  let letVariable = 'let : varibale inside block';
  var varVariable = 'var : varibale inside block';
}
if (typeof letVariable !== undefined || letVariable !== null) {
}
console.log(varVariable);
//
console.log('execution context');
function foo() {
  console.log('outer function - this : ', this);
  var x = 1;
  function bar() {
    console.log('inner function - this : ', this);
    var y = 2;
    console.log('inside inner function - x : ', x);
    console.log('inside inner function - y : ', y);
  }
  bar();
  console.log('inside outer function - : x ', x);
  // console.log('inside outer function - : y ', y);
}
foo();
//
function a() {
  console.log('a');
  b();
  console.log('a again');
}
function b() {
  console.log('b');
  c();
  console.log('b again');
}
function c() {
  console.log('c');
}
a();
