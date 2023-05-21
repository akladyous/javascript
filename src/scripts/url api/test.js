
const { create } = require('domain');
var url = require('url');

let log = console.log
let u = new URL('https://stocknewsapi.com/api/v1?tickers=FB&items=50&token=GET_API_KEY')
// let = url = "https://stocknewsapi.com"
// let urlPath = "/api/v1"
// let base = {};
let url1 = 'www.amazon.com'
let url2 = 'https://www.amazon.com'

function createUrl(url, path, parameters, token){
    let urlToParse;
    try{
        urlToParse = new URL(url);
        log(urlToParse.href);
        
    } catch (error){
        log('wrong url!')
        return false
    }
    if(!path){
        path = '/api/v1'
    }
    let params = new URLSearchParams(parameters);
    params.append('token', token)
    urlToParse.pathname = path;
    urlToParse.search = params
    log(urlToParse.href);
}


function isValidUrl(url){
    try{
        let urlToParse = new URL(url);
        return urlToParse
    } catch(err){
        return false
    }
}
let d1 = {name:'paolo',age:30,state:'fl'}
createUrl(url2,parameters=d1, token='ddfksadfpo4rj1234o5');

