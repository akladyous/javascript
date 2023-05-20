class Logger {
    constructor() {
        this.logs = [];
    };

    count() {
        return this.logs.length;
    }
    logger(message) {
        const timestamp = new Date().toISOString().split('T').join(' ').replace(/\.\d+/, "")
        this.logs.push({ message, timestamp })
        console.log(`${timestamp} ${message}`)
    }
}
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
            return this.getInstance()
        }
    }
    getInstance() {
        return Singleton.instance;
    }
}
class Singleton2 {
    constructor() {
        if (Singleton2.instance) {
            return Singleton2.instance
        }
        Singleton2.instance = new Logger();
        return Singleton2.instance
    }
}
l1 = new Singleton()
l1.logger('ciao')
// l2 = new Singleton2()
// l2.logger('ciao')
