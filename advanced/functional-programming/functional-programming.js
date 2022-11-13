var array1 = [1, 2, 3, 4];

function mapForEach(arr, fn) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]))
    };
    return newArr
}
var arr1 = mapForEach(array1, (item) => {
    return item * 2
})
console.log(arr1)
//
var checkPastLimit = function (limit, item) {
    return item > limit
}
var arr2 = mapForEach(array1, checkPastLimit.bind(this, 2))
console.log(arr2)
var checkPastLimitSimplified = function (limiter) {
    return function (limiter, item) {
        return item > limiter
    }.bind(this, limiter)
}
var arr3 = mapForEach(array1, checkPastLimitSimplified(2))
console.log(arr3)
