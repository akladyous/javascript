console.log('-------------------------- FUNCTION CONSTRUCTOR --------------------------')
function Person(firstName, lastName) {
    console.log('When function constructor is invoched, it creates a new empty object with the name as the function name ')
    console.log('this : ', this, 'is the Object have been created')
    console.log("function constructor bind properties defined inside the function with 'this' keyword to the new created object")
    this.firstName = firstName
    this.lastName = lastName
    // in case of unimplicit return statement the function constructor return the newly created object
}
let jane = new Person('Jane', 'Doe')
console.log('jane : ', jane)
console.log('\n\n')
console.log('-------------------------- FUNCTIONS --------------------------')
function User(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status
}

const u1 = new User('alex', 20, false)
const u2 = new User('marc', 25, true)

User.prototype.login = function (status) {
    this.status = status;
    console.log('logout status  for : ', this.name, ' is : ', this.status)
};
User.prototype.logout = function (status) {
    this.status = status;
    console.log('logout status  for : ', this.name, ' is : ', this.status)
};

u1.login(true)
console.log('user 1: ', u1)
u2.logout(false)
console.log('user 2: ', u2)

//inheritance
function Admin(role, ...args) {
    User.apply(this, args)
    this.role = role
}
Admin.prototype = Object.create(User.prototype)
const a1 = new Admin('suer admin', 'david', 16)
console.log('admin 1 : ', a1)

a1.login(true)
