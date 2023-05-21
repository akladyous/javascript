class mClass1{
    #pVar1 = 0;
    constructor(var1){
        // this.#pVar1 = 10;
        this.variable = var1;
    }
    get getPrivateVar(){
        return this.#pVar1
    }
    set setPrivateVar(value){
        this.#pVar1 = value;
    }
    get getPublicVar(){
        return (this.variable + 10)
    }
}
let v1 = new mClass1(10);
console.log(v1.variable)
console.log(v1.getPublicVar)
console.log(v1.getPrivateVar)
console.log(v1.setPrivateVar = 20)
console.log(v1.getPrivateVar)
