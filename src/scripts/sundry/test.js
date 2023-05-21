class Animal {
    static speakVariable = 'speak static variable'
      static v1 = 'variable one'
      speak() {
      return this.speakVariable;
    }
    static eat() {
      return this.v1;
        console.log('static variable is: ', this.v1)
        }
  }



  Animal.v1
  Animal.eat()