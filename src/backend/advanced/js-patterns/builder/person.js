class Person {
    constructor(builder = {}) {
        this.name = builder.name
        this.age = builder.age
        this.role = builder.role
        this.status = builder.false;
        this.isVerified = builder.false;
    }
    toString() {
        return JSON.stringify(this)
    }
    printInstance() {
        return this;
    }
};
export default Person;

// let x = new Person({name: 'paolo', age: 30})
// console.log(x.toString());
// console.log(x.printInstance());