let john = {
  firstName: 'john',
  lastName: 'Doe',
  age: 18,
};
let hanna = {
  firstName: 'hanna',
  lastName: 'Johnson',
  age: 18,
};
function fullName() {
  const options = arguments[0];
  if (arguments.length === 0) {
    return `${this.firstName} ${this.lastName}`;
  }
  let title = arguments[0].toUpperCase();
  return `${title} ${this.firstName} ${this.lastName}`;
}

let JohnFullName = fullName.bind(john, 'mr');
let HannaFullName = fullName.bind(hanna, 'mrs');
console.log(JohnFullName());
console.log(HannaFullName());
