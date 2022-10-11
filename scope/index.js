
function f1() {
    function inner() {
        console.log('this from inner function : ', this)
    }
    inner()
}
f1();
const o1 = {
    name: 'one',
    log: function () {
        this.name = 'two'
        console.log('this from inside function in object 1:', this.name)
        var setName = function (newName) {
            this.name = newName;
        };
        setName('three')
        console.log('this from inside function in object 2 :', this.name)
    }
}
console.log(o1.log())
