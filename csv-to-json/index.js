var fs = require('fs');
var path = require('path');

function csv2json(){
    let csvFile = path.join(__dirname, 'iris.csv')
    let jsonFile = path.join(__dirname, 'iris.json')

    let file = fs.readFileSync(csvFile, {encoding: 'utf-8'},
        (err) => { console.log(err); }
        );

    let data = file.split('\n');
    let header = data.shift().split(',')

    let jsonData = [];
    data.forEach(function(rows){
        let jsonTemp = {};
        let lineTemp = rows.split(",");
        for(let idx=0; idx<header.length; idx++){
            jsonTemp[header[idx]] = lineTemp[idx]
        }
        jsonData.push(jsonTemp);
    });
    let jsonFormated = JSON.stringify(jsonData);
    fs.writeFileSync(jsonFile, jsonFormated, 'utf-8',
    (err) => { return console.log(err); }
    );
};

console.log(JSON.stringify(jsonData))


