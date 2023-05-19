// addBtn = document.querySelector('#add');
// removeBtn = document.querySelector('#remove');
// testBtn = document.querySelector('#test');
// addBtn.addEventListener('click', addFunc, false);

const doStuff = (e) => {
    e.stopPropagation();
    if (e.type === "keydown" && e.keyCode === 13) {
        e.target.click();
    }
};

const addEventToElement = (elementByClassName, callback) => {
    const element = document.querySelector(elementByClassName);
    element.addEventListener("click", callback);
    element.addEventListener("keydown", callback);
};
addEventToElement(".test", doStuff);

const addAttributeToHeadings = (parentElementByClass, tags, attribute, value) =>{
    document
        .querySelector(parentElementByClass)
        .querySelectorAll(tags)
        .forEach((tag) => {
            tag.setAttribute(attribute, value);
        });
};
addAttributeToHeadings(".test", "h1, h2, h3, h4, h5, h6","role", "presentation");

const sum2Timeout = (x, y) => {
    let countdown = x + y;
    const timer = setInterval(()=>{
        if(countdown === 0){
            clearInterval(timer)
        } else{
            console.log(countdown)
            countdown--;
        }
    }, 1000);
};
sum2Timeout(5, 2);