console.log('------------------------ TEST 1 -----------------------------')
const sumNums = (a, b, c) => a + b + c;

const curryFunc1 = fn => {

    return function curried(...args) {
        // if (fn.length !== args.length) {
        if (args.length < fn.length) {

            // return curried.bind(null, ...args)
            return function (...args1) {
                return curried.apply(null, args.concat(args1))
            }
        }
        return fn(...args)
    }
}

let totalSum = curryFunc1(sumNums)
console.log(totalSum(1, 1, 1))
// debugger
let res = totalSum(1)
res = res(1)
console.log(res(1))