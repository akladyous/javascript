function counter() {
    var _count = 0
    console.log('intial value of _count : ', _count)
    function changeBy(value) {
        _count += value
    }
    return {
        increment(val = 1) {
            changeBy(val)
        },
        decrement(val = -1) {
            changeBy(val)
        },
        getValue() {
            return _count
        }
    }
}
const counter1 = counter();
counter1.increment();
counter1.increment(3);
console.log(counter1.getValue());
