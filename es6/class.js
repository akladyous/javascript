class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }

  resetPassword(newPassword) {
    this.password = newPassword;
  }
}
