class Logger {
    constructor() {
        this.logs = [];
    };
    count() {
        return this.logs.length;
    }
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push(message);
        console.log(`${timestamp} - message`)
    }
};

class Singleton {
    constructor() {
        if (!Singleton.instances) {
            Singleton.instances = new Logger();
        }
    }
    getInstance() {
        return Singleton.instances
    }
}
export default new Logger()
// export default Singleton;