const person = {
    firstName: 'john',
    lastName: 'doe',
    getFullName: function () {
        let fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
};
const logName = function (lang1, lang2) {
    console.log('logged : ', this.getFullName());
    console.log('arguments : ', lang1, lang2)
};
var logPersonName = logName.bind(person);
logPersonName('en', 'it');
// function borrowing
const person2 = {
    firstName: 'Alex',
    lastName: 'Doe'
}
logName.call(person, 'it', 'en')
logName.apply(person, ['xx', 'yy'])
console.log(person.getFullName.call(person2));
// function curring
