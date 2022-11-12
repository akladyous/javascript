function buildFunctions() {
    var arr = [];
    // the result varies if the loop is created using let instead of var
    for (var i = 0; i < 3; i++) {
        arr.push(function () { console.log(i) });
    }
    return arr;
}
const fs = buildFunctions();
console.log(fs)
fs[0]()
fs[1]()
fs[2]()
console.log("--------------------------------")
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j)
                }
            }(i))
        )
    }
    return arr;
}
const fs2 = buildFunctions2();
fs2[0]()
fs2[1]()
fs2[2]()
