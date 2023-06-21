for (var x = 0; x < 5; x++) {
  console.log('var x : ', x);
}
console.log('outside the scope');
console.log('value of x : ', x);
// ---------------------------------------------
console.log('-'.repeat(50));
function test1() {
  for (var i = 0; i < 5; i++) {
    console.log('var i : ', i);
  }
  console.log('loop ends'); // llop ends
  console.log('var i : ', i);
}
test1();
console.log('var i : ', i); //Uncaught ReferenceError: i is not defined

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
