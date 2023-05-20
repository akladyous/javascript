console.log('---------------------- Example 1 ----------------------------')
let sum = (...args) => {
    return [...args].reduce((acc, num) => acc + num)
};

const callCounter = (fn) => {
    let counter = 0;
    return (...args) => {
        console.log('current counter is : ', counter += 1)
        return fn(...args)
    }
};
sum = callCounter(sum);
console.log(sum(1, 2, 3))
console.log(sum(2, 2))
console.log('---------------------- Example 2 ----------------------------')
// let rectangleArea = (length, width) => {
//     return length * width;
// };
function rectangleArea(length, width) {
    return length * width;
}
function countParams(func) {
    const name = func.name
    console.log('func.name : ', func.name, ' from countParams')
    return (...params) => {
        if (params.length !== func.length) {
            throw new Error(`incorrect number of parameters for  ${func.name}`)
        }
        return func(...params);
    }
}
function requireIntegers(func) {
    const name = func.name
    console.log('func.name : ', func.name, ' from requireIntegers')
    return (...args) => {
        args.forEach(arg => {
            if (!Number.isInteger(arg)) throw new Error(`Parameters for ${name} must be integers`)
        });
        return func(...args)
    };
};

rectangleArea = requireIntegers(rectangleArea)
console.log(rectangleArea)
rectangleArea = countParams(rectangleArea)
console.log(rectangleArea)
// console.log('rectangleArea(2, 2) : ', rectangleArea(2, 2))
// console.log(rectangleArea(2, 2, 1))
// console.log(rectangleArea(2, '2'))
console.log('---------------------- Example 3 ----------------------------')