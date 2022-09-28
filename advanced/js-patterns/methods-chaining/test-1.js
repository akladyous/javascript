
function User(name) {
    this.name = name
    this.status = false
}
User.prototype.login = function (status) {
    this.status = status
    console.log('login : ', this.status)
    return this
}
User.prototype.logout = function (status) {
    this.status = status
    console.log('logout : ', this.status)
    return this
}
User.prototype.test = function () {
    console.log('test...')
    return this
}
var u1 = new User('marc')
u1.login(true).test()