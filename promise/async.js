let c = true;
console.log(c);
async function hi(){
    if(c){
        return "ok";
    } else{
        return "ko";
    }
}
hi()
.then(valore => console.log(valore));

async function hello() {
    return await Promise.resolve("Hello");
};

hello().then(alert);

