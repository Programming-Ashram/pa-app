class Car{
    constructor(productName,color){
        this.productName = productName;
        this.color = color;
    }
}
class Bike extends Car{}
class Cycle extends Bike{}

let car1 = new Car('KIA','blacKMate');
let car2 = new Car('THAR','blacK');
let car3 = new Car('ERTIGA','WhiteMate');
let car4 = new Car('Swift','blacK');
let bike1 = new Bike('Shine','red');
let bike2 = new Bike('Activa','pink');
let bike3 = new Bike('YAMAHA','blue');
let cycle1 = new Cycle('HERO','grey');
let cycle2 = new Cycle('Hurcules','green');
let cycle3 = new Cycle('Missindia','pink');
