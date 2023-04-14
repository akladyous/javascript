console.log('------------------- objects -------------------');
var obj = new Object();
console.log(obj.constructor == Object);
console.log(obj);

const arr = [];
console.log(Object.hasOwn(arr, 'constructor'));
console.log(obj.hasOwnProperty('constructor'));
