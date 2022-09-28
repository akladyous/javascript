
async function readData(fileName){
    let response = await fetch(fileName);
    if (!response.ok){
        throw new Error(`Reuqest Error! ${response.status}`)
    }
    let data = await response.json();
    return data;
};

readData('./iris.json')
    .then(jsonData => {data = jsonData; return jsonData})
    .catch((error => console.log(error)));

console.log(data)
let content = document.querySelector('.content')
let irisTable = document.createElement('table');
irisTable.className = 'iris-table';

let tableHeader = document.createElement('tr');
Object.keys(data[0]).forEach(key => {
    let tableCol = document.createElement('th');
    tableCol.textContent = key;
    tableHeader.appendChild(tableCol);
});
irisTable.append(tableHeader);


data.forEach(row => {
    let tableData = document.createElement('tr')
    for(let value in row){
        let tableValues = document.createElement('td');
        tableValues.textContent = row[value];
        tableData.appendChild(tableValues);
    }
    irisTable.appendChild(tableData);
});



content.append(irisTable)
