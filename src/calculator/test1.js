let result, btn;
document.addEventListener('DOMContentLoaded', init);

function init(event){
    let result = document.getElementsByClassName("result-box");
    let btn    = document.getElementsByClassName("button");

    createEvent(btn, result);
};

function createEvent(btn, result) {
    for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', eventHandler);
    }
    document.addEventListener('keydown', eventHandler);
    result.textContent = "ciao";
}

function eventHandler(event){
    if (event.type = 'Click'){
        eventMouse(event);
    } else if(event.type = 'Keydown'){
        eventKeyboard(event);
    }
};

function eventMouse(event){
    result.textContent = event.target.value;
    // console.log("result: " + event.target.value);
    // console.log("event type: " + event.type);
    // console.log("event target: " + event.target);
    // console.log("event currentTarget: " + event.currentTarget);
    // console.log("event srcElement: " + event.srcElement);
    // console.log("event: " + event);
};

function eventKeyboard(event){
    init.call()
    console.log(event.type);
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(event.srcElement);
    console.log(event);
};

let math = {};