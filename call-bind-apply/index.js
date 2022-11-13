const person = {
    firstName: 'john',
    lastName: 'doe',
    getFullName: function () {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};
const person2 = {
    firstName: 'Alex',
    lastName: 'Doe'
}

const logName = function (lang1, lang2) {
    console.log('logged : ', this.getFullName());
    console.log('arguments : ', lang1, lang2)
};
var logPersonName = logName.bind(person);
logPersonName('en', 'it');

logName.call(person, 'it', 'en')
logName.apply(person, ['xx', 'yy'])

console.log(person.getFullName.call(person2));
