// https://youtu.be/I4MebkHvj8g
'strict mode'
console.log('---------------------- Example 1 ----------------------------')

const buildSandwich1 = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
};

const buildSandwich = ingredient1 => ingredient2 => ingredient3 => `${ingredient1} ${ingredient2} ${ingredient3}`
const sandwich = buildSandwich('bacon')('lettuce')('tomato')
console.log(sandwich)
console.log('---------------------- Example 2 ----------------------------')
function customAdd1(a) {
    return function customAdd2(b) {
        return function customAdd3(c) {
            return a * b * c
        }
    }
}
const add = a => b => c => a + b + c
let add1 = add(2)
console.log('add1 : ', add1)
let add2 = add1(2)
console.log('add2 : ', add2)
let result = add2(2)
console.log('result : ', result)
console.log('---------------------- Example 3 ----------------------------')
const addCustomer = fn => (...args) => {
    //addCustomer
    console.log('saving customer info...')
    return fn(...args)
};
const processOrder = fn => (...args) => {
    // processOrder
    console.log('processing order : ', args[0]);
    return fn(...args)
};
let completeOrder = (...args) => {
    // completeOrder
    console.log(`Order #${[...args].toString()} completed`)
};
// function addCustomer(...args) {
//     console.log('saving customer info...')
//     return function processOrder(...args) {
//         console.log('processing order : ', args[0]);
//         return function completeOrder(...args) {
//             console.log(`Order #${[...args].toString()} completed`)
//         }
//     }
// }
let order = processOrder(completeOrder);
console.log('processOrder(completeOrder) : ', order)
order = addCustomer(order); // 
console.log('addCustomer(completeOrder)  : ', order)
console.log(order(100))
console.log('---------------------- Example 4 ----------------------------')
const curry = (fn) => {
    console.log('curry outer')
    return curried = (...args) => {
        // debugger
        if (fn.length !== args.length) {
            return curried.bind(null, ...args)
        };
        // return fn(...args)
        return fn.apply(null, args)
    }
};
const sum = (a, b, c) => a + b + c;
const total = curry(sum)
let val1 = total(1)
let val2 = val1(1)
let val3 = val2(1)
console.log(val3)
console.log('---------------------- Example 5 ----------------------------')
function curryFunc(func) {
    return function curried(...args1) {
        if (args1.length >= func.length) {
            return func.apply(this, args1);
        } else {
            return function (...args2) {
                return curried.apply(this, args1.concat(args2));
            }
        }
    };
}
function multiply(a, b, c) {
    return a * b * c;
}
let curriedSum = curryFunc(multiply);
console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3));  // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
console.log('---------------------- Example 6 ----------------------------')
let infiniteSumCurry = (fn, seed) => {
    const reduceValue = (args, initialValue) => {
        args.reduce((prev, next) => {
            return fn.call(fn, prev, next)
        }, initialValue)
        const next = (...args) => {
            console.log(...args);
            return (...arrArgument) => {
                if (!arrArgument.length) {
                    return reduceValue(args, seed)
                }
                return next(...args, reduceValue(arrArgument, seed))
            }
        }
    };
    return next()
};
// console.log(sum(1)(3, 4)(5, 6)(7, 8, 9)(1, 2, 3, 4, 5, 6, 7)()):