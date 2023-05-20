function counter() {
    var _counter = 0
    function changeBy(value) {
        _counter += 1
    }
    const data = {
        value() {
            return _counter
        },
        increment(val = 1) {
            _counter += val
        },
        decrement(val = -1) {
            _counter -= val
        }
    }
}
