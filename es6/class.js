class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  get getPassword() {
    return this.password;
  }
  set setPassword(newPassword) {
    this.password = newPassword;
  }
  resetPassword(newPassword) {
    this.password = newPassword;
  }

  static minimumPasswordLength = 6;

  #description = 'User Class';
  get description() {
    return this.#description;
  }
}

class Profile extends User {
  constructor(userName, password, age) {
    super(userName, password);
    this.age = age;
  }
}

var alex = new User('alex', '1234');
console.log(alex);
