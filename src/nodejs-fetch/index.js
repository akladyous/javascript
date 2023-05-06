import fetch from 'node-fetch';
'use strict'


let url1 = "https://dailyhodl.com/2021/10/23/crypto-analyst-planb-predicts-massive-bitcoin-surge-incoming-heres-his-forecast";
let url2 = "https://cryptoslate.com/analysts-say-these-reasons-were-behind-shiba-inus-shib-300-rise-last-month/";
let url = "https://www.benzinga.com/markets/cryptocurrency/21/10/23455956/has-shiba-inu-price-hit-a-wall-of-resistance-why-investments-in-dogecoin-killer-are-slumpi";

async function request(url)

// function request(){
//     console.log('start');
//     fetch(url)
//     .then( (data) => {
//         // console.log(data);
//         console.log(response.type);
//         console.log(response.url);
//         console.log(response.useFinalURL);
//         console.log(response.status);
//         console.log(response.ok);
//         console.log(response.statusText);
//         console.log(response.headers);
//     })
//     .catch((err) => {
//         console.log("error: " , err.message);
//     });
    

// };

// request();
// fetch('https://example.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));


url = "https://poocoin.app/tokens/0xa2a26349448ddafae34949a6cc2cecf78c0497ac";
const response = await fetch(url);
const body = await response.text();

console.log(response.status);