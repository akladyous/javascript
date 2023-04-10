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
var globalVariable;
function a() {
  globalVariable = 'function a';
  console.log('first function in the stack - before : ', globalVariable);
  b();
  console.log('first function in the stack - after  : ', globalVariable);
}
function b() {
  globalVariable = 'function b';
}
a();
