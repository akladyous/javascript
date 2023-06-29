var str = 'hello';
console.log('typeof str : ', typeof str);
console.log('str instanceof String : ', str instanceof String);
console.log('str instanceof Object : ', str instanceof Object);

console.log('-'.repeat(50));
var strObject = new String('hello');
console.log('typeof strObject : ', typeof strObject);
console.log('strObject instanceof String : ', strObject instanceof String);
console.log('strObject instanceof Object : ', strObject instanceof Object);

console.log('-'.repeat(50));
var int = 123;
console.log('typeof int : ', typeof int);
console.log('int instanceof Number : ', int instanceof Number);
console.log('int instanceof Object : ', int instanceof Object);

console.log('-'.repeat(50));
var numberObj = new Number(123);
console.log('typeof numberObj : ', typeof numberObj);
console.log('numberObj instanceof Number : ', numberObj instanceof Number);
console.log('numberObj instanceof Object : ', numberObj instanceof Object);
console.log(numberObj);
console.log(numberObj.valueOf());
