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