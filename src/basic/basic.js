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
var intObject = new Number(123);
console.log('typeof intObject : ', typeof intObject);
console.log('intObject instanceof Number : ', intObject instanceof Number);
console.log('intObject instanceof Object : ', intObject instanceof Object);
console.log(intObject);
console.log(intObject.valueOf());
