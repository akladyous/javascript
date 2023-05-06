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
const counter3 = counter();
counter3.increment();
counter3.increment(3);
counter3.decrement(-3);
console.log(counter3.getValue());
