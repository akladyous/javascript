const person = {
    first_name: 'john',
    last_name: 'doe',
    getFullName: function () {
        let fullName = this.first_name + ' ' + this.last_name;
        return fullName;
    }
};

const logName = function (lang1, lang2) {
    console.log('logged : ', this.getFullName());
};
var logPersonName = logName.bind(person);
logPersonName();
