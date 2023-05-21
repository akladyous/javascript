let names = {
    first:"milena",
    last:"akladyous",
    age:21,
    gender:"female",
    name: function() {return `${this.first} ${this.last}`}
};

console.log(names.name());