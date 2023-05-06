
let calculator = {
    numbers : "0123456789.",
    operators : "()+-*/=",
    // value : null,
    history : {},
    inputValue: null,
    // get inputValue() {return this.value},
    set inputValue(value) { this.value = value; result.value += this.value; },
    
    displayResult : ()=> {
        console.log("input value 1: " + calculator.inputValue);
        result.value = this.inputValue},
    
    clearScreen : () => { result.value = ""; return true; },
    
    get assertValue() {
        if(this.numbers.includes(this.inputValue) || this.operators.includes(this.inputValue)){
            return true;
        }else{
            return false;
        }
    }

};


let result = document.getElementById("result");
let btns = document.getElementsByClassName("button");
for (i=0; i < btns.length; i++) {
    btns[i].addEventListener('click', eventHandler);
};
document.addEventListener('keydown', eventHandler);

function eventHandler(event){
    // let value;
    // if (event.type == "keydown"){
    //     value = event.key;
    // }
    // else if (event.type == "click"){
    //     value = event.target.value;
    // }
    // let value = event.key || event.target.value;
    calculator.inputValue = event.type == 'keydown' ? event.key : event.target.value;
    console.log("input value 2: " + calculator.inputValue);
    
    // console.log("value: " + calculator.inputValue);
    // console.log("event.shiftKey: " + event.shiftKey);
    // console.log("key code: " + event.keyCode);
    // console.log("key : " + event.key);
    // console.log("code : " + event.code);

    if (calculator.assertValue){
        calculator.displayResult();
    }

    
};



function assertValue(value) {
    if (calculator.numbers.includes(value) || calculator.operators.includes(value)) {
        return true;
    } else {
        return false;
    }
}
// console.log("status: " + numbers.includes(value) || operators.includes(value));
// console.log("valore: " + v);
// console.log("event.type: " + event.type);
// console.log("event.shiftKey: " + event.shiftKey);
// console.log("event.Key: " + event.key);
// console.log("event.target: " + event.target)
// console.log("event.target.value: " + event.target.value);
// console.log("-----------------------------------------")
