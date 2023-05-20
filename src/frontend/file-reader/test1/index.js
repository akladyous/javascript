

var fileObj = document.getElementById("file-input")
var content = document.getElementById("preview")


fileObj.addEventListener('change', (event) => {    
    console.log(fileObj.files);
    console.log(event.target);
    // let fileInputControl = event.target;
    // let files = fileInputControl.files;
    // let firstFile = files[0];
    
    // let myFileReader = new FileReader(firstFile);
    let myFileReader = new FileReader();
    myFileReader.onload = function(event){
        // let fileContent = event.target.result;
        content.textContent = myFileReader.result;
    }

    myFileReader.readAsText(fileObj.files[0]);
})
