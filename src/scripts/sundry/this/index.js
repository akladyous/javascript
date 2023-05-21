let testOne = {
    a: 'one',
    displayone: function(){console.log(this)}
}
testOne.d='four'
// testOne.displayone()

function testTwo(a){
    console.log(this)
};
// testTwo('a')

function testThree(a){
    this.a = a
    console.log(this)
};
// let test3 = new testThree('😆')

class testFour{
    constructor(a){
        this.a = a
        console.log(this)
    }
}
// let test4 = new testFour('four')

const testFive ={
    title:'title',
    tags:['a','b','c'],
    testFiveInnerOne(){
        this.tags.forEach((tag)=>{
            console.log(this.title, tag)
        })
    },
    testFiveInnerTwo(){
        this.tags.forEach( function(tag){
            console.log(tag, this)
        },this)
    }
}
//with arrow function this refer to its' parent.
// testFive.testFiveInnerOne() 
// testFive.testFiveInnerTwo()

const testSix = {
    name: 'david',
    age: 20,
    displayName: () => {
        console.log(this.name, this.age)
    }
}
testSix.displayName()