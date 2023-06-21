function a() {
  function b() {
    console.log('function B inside function A');
    console.log('myVar : ', myVar);
    console.log('-'.repeat(50));
  }
  var myVar = 2;
  b();
}

var myVar = 1;
a();
// -----------------------------------------------------------------------
if (true) {
  var num1 = 10;
  let num2 = 20;
  const num3 = 30;
}
console.log(num1); // prints 10, num1 created in global scope
console.log(num2); // refernce error: num2 is not defined
console.log(num3); // refernce Error: num3 is not defined
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
