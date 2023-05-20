class Logger {
    constructor() {
        this.logs = [];
    }
    log(msg) {
        this.logs.push(msg)
        console.log(msg)
    }
    getMsg() {
        return this.logs
    }
};
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
        return Singleton.instance
    }
}

m1 = new Singleton();
m1.log('ciao')
m2 = new Singleton();
m2.log('paolo')
console.log('get method')
console.log(m2.getMsg());
console.log(m1.getMsg());
