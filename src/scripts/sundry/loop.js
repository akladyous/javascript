var n = [1, 2, 3, 4, 5];
var n1 = [9, 8, 7, 6, 5];

for (let x in n) {
    console.log(x, typeof x);
}
for (let x of n) {
    console.log(x, typeof x);
}
var range = n => [...Array(n).keys()];
for (let x in range(4)) {
    console.log(x);
}

var x = [...n1];
console.log(x);




