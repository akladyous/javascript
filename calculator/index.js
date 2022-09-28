document.addEventListener('DOMContentLoaded', init);
function init(event){
    const calculator = new Object();
    Object.defineProperties(calculator, {
        numbers : {
            value: "0123456789.",
            configurable: false,
            enumerable: false,
            writable: false,
        },
        operators : {
            value: "()+-*/",
            configurable: false,
            enumerable: false,
            writable: false,
        },
        value : {
            value : null,
            configurable: false,
            writable : true,
            enumerable : false
        },
        history : {
            value : {},
            configurable: false,
            writable : true,
            enumerable : false
        },
        inputValue : {
            configurable: false,
            enumerable : false,
            get: () => this.value,
            set: (_value) => {this.value = _value}
        }
    });
    calculator.displayResult = () => {result.value += calculator.inputValue},
    calculator.clearScreen = () => { result.value = ""; return true; },
    calculator.assertValue = () => {
            if(calculator.numbers.includes(calculator.inputValue) || calculator.operators.includes(calculator.inputValue)){
                return true;
            }else{
                return false;
            }
        }
    
    let result = document.getElementById("result");
    let btns = document.getElementsByClassName("button");
    for (i=0; i < btns.length; i++) {
        btns[i].addEventListener('click', eventHandler);
    };
    document.addEventListener('keydown', eventHandler);
    
    function eventHandler(event){
        console.log(event.key, event.target.value);
        calculator.inputValue = event.type == 'keydown' ? event.key : event.target.value;
        console.log(calculator.inputValue)
        if (calculator.assertValue()){
            calculator.displayResult();
        }
        if (calculator.inputValue === 'Escape' || calculator.inputValue === 'AC'){
            calculator.clearScreen()
        } else if(calculator.inputValue === 'Backspace'){
            if (result.value.length > 0){result.value.slice(0, -1)}
        } else if(calculator.inputValue === "=" || calculator.inputValue === "Enter"){
            result.value = eval(result.value);
        }
        
    };
}

