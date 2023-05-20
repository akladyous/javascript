function People(first, last, gender){
    this.first = first;
    this.last = last;
    this.gender = gender;
    this.name = `${first} ${last}`
}

function Teacher(first, last, gender, subject){
    People.call(this, first, last, gender);
    this.subject = subject;
}
Teacher.prototype.race = "white";
Teacher.prototype.mansion = function(){
    return this.subject.toUpperCase();
};

var paolo = new People("boula", "akladyous", "male");
var mary = new Teacher("Mary", "Smith", "Female", "math");
mary.race = "black"

console.log(paolo.name);
console.log(mary.mansion());
console.log(mary.race);

// console.log(paolo.constructor);
console.log(mary.hasOwnProperty('race'));
