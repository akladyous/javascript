
class Polygon{
    constructor(length, height){
        this.name = "plygon";
        this.length = length;
        this.height = height
    }
    msg(){
        console.log(`my name is ${this.name}`);
    }
}
let poly = new Polygon(10,10);
poly.msg()

class Square extends Polygon{
    constructor(length, height){
        super(length, height)
        this.name = "square"
        
    }
    msg(){
        console.log(`my name is ${this.name}`)
    }

    area(){
        console.log(this.length * this.height);
    }
}
let calculateSquare = new Square(5,5)
calculateSquare.area()
calculateSquare.msg()

// console.log(poly.height)
// console.log(poly)
// console.log(calculateSquare)