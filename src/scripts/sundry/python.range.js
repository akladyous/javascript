// for (var x = 0; x < 10; x++){
//     console.log(x);
// }
let a = new Array(10);
function ArrayRange(size){
    let arr = new Array(size);
    for (let x = 0; x < size; x++){
        arr[x] = x;
    }
    return arr;
}
var na = new ArrayRange(5);
console.log(na);

for (let x in ArrayRange(5)) {
    console.log(x);
}

var range = size => [...Array(size).keys()];
var na1 = range(10);
console.log(na1);

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}