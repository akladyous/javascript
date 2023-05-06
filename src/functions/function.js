function greet() {
  console.log('ciao');
}
greet.language = 'english';
console.log(greet.language);

const people = {
  firstName: 'john',
  lastName: 'doe',
  fullName: function () {
    console.log('this is: ', this);
    console.log([this.firstName, this.lastName].join(' '));
    function setname() {
      console.log('this inside setname function : ', this);
    }
    setname();
  },
};
people.fullName();
