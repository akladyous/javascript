console.log('test');
const myPromise = new Promise((resole, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand === 0){
        resole("ok");
    } else {
        reject("ko");
    }    
}
);

myPromise
    .then((okMsg)=>{console.log('success ', okMsg)})
    .catch((koMsg)=>{console.log('wrong ', koMsg)});