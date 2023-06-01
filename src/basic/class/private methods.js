
class classPrivateMethods{
    #var1 = 10;
    static #var2 = 10;
    
    get #privateMethod(){
        console.log(`private method with private variable of ${this.#var1}`);
    }
    getPrivateMessage(){
        return this.#privateMethod;
    }
    static staticPrivateField(){
        console.log(classPrivateMethods.#var2)
    }
}
let i1 = new classPrivateMethods();
// i1.getPrivateMessage()
classPrivateMethods.staticPrivateField()
