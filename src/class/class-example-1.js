class User {
  static #_count = 0;
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
    User.#_count++;
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

  static minimumPasswordLength;

  static {
    this.minimumPasswordLength = 6;
    console.log('inside static block');
  }

  static getCount() {
    return User.#_count;
  }
}

class Profile extends User {
  constructor(userName, password, age) {
    super(userName, password);
    this.age = age;
  }
}

var alex = new User('Alex', '1234');
var mary = new User('Mary', '4321');
console.log(alex);
console.log(mary);
console.log(User.get);
