import Person from './person.js'

class PersonBuilder {
    constructor(name) {
        this.name = name;
    }

    status(status) {
        this.status = status;
        return this;
    };

    emailVerified(status) {
        this.isVerified = status
        return this;
    }

    makeAdmin() {
        this.role = 'admin'
        return this;
    }

    makeUser() {
        this.role = 'user'
        return this;
    }

    build() {
        return new Person(this)
    }

    getInstance() {
        return this;
    }
};

export default PersonBuilder;