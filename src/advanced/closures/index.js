console.log('IIFE Immediately Invoked Function Expression')
const privateCounter = (() => {
    let counter = 0;
    console.log('initial counter value: ', counter)
    return () => { counter += 1; console.log('counter value from closure fuction : ', counter) }
})();

privateCounter();
privateCounter();
privateCounter();

console.log('----------------------------------------------')
const makeCounter = function () {
    let privateCounter = 0;
    console.log('intial counter value : ', privateCounter)
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment() {
            changeBy(1);
        },

        decrement() {
            changeBy(-1);
        },

        value() {
            return privateCounter;
        },
    };
};

const counter1 = makeCounter();
const counter2 = makeCounter();
console.log('counter1 : ', counter1.value()); // 0.
counter1.increment(); console.log('counter1.increment() : ', counter1.value())
counter1.increment(); console.log('counter1.increment() : ', counter1.value())
counter1.decrement(); console.log('counter1.decrement() : ', counter1.value())
counter1.decrement(); console.log('counter1.decrement() : ', counter1.value())
console.log('counter1  value      : ', counter1.value()); // 1.
console.log('----------------------------------------------')
console.log('counter2 : ', counter2.value()); // 0.
counter2.increment(); console.log('counter1.increment() : ', counter2.value())
console.log('counter2  value      : ', counter2.value()); // 1.
counter2.decrement(); console.log('counter2.decrement() : ', counter2.value())
console.log('----------------------------------------------')