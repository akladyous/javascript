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
