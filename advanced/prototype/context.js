console.log('-------------- execution context --------------');
{
  let letVariable = 'let : varibale inside block';
  var varVariable = 'var : varibale inside block';
}
if (typeof letVariable !== undefined || letVariable !== null) {
  console.log(varVariable);
}
//

function foo() {
  console.group('outer function executed');
  console.log('this : ', this);
  var x = 1;
  console.log('declared variable "x" : ', x);
  function bar() {
    console.group('inner function');
    console.log('declared variable "y" : ', y);
    console.log('this : ', this);
    var y = 2;
    console.log('access varibale "x" from outer function x : ', x);
    console.log('value of y : ', y);
  }
  bar();
  console.log('inside outer function - : x ', x);
  // console.log('inside outer function - : y ', y);
}
foo();

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
