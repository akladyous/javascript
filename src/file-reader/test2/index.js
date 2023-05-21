
let fileObj = document.querySelector('#fileElement');
let textArea = document.querySelector('#txt')
fileObj.addEventListener('change', readerFileData, false);
var fileContent;

function readerFileData(event){
    file = event.target.files[0];
    let reader = new FileReader();

    reader.onload = () => {
        textArea.textContent = reader.result;
        fileContent = reader.result;
        // storeResult(reader.result);
    };
    reader.readAsText(this.files[0])
};

