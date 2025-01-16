//Javascript OOPs
//JS OOPS Class
//JS Object
//JS Prototype
//JS Constructor Method
//JS Static Method
//JS Encapsulation
//JS Inheristance
//JS Polymorphism
//JS Abstraction
//Javascript OOPs Classes

// function test(){
//  console.log("Hello I am function")
// };

// let car = {
// carName : "Audi",
// CarPrice : "40,0000"
// carColor :"black"
//}

// Class Function
    class Car {
        // Constructor Object Props storation
        constructor(carName, carPrice, carColor){
            this.carName = carName;
            this.carPrice = carPrice;
            this.carColor = carColor;
        }
    }
// method
update.Color = (newColor, newPrice) =>{
    this.carColor = newColor;
    this.carPrice = newPrice;
}

// Instanse of Object
let car1 = new Car("Audi", "30,0000", "black");

//Update Object by using method
car1.updateColor ("blue", "40,0000");

let car2 = new Car("BMW", "20,0000", "Black");
let car3 = new Car("Swift", "10,oooo","Red");

let groupCar = [car1, car2,car3];

console.log(groupCar);
groupCar.forEach( car =>{
    console.log(car.carPrice);
})

// Console.log(typeof(car));
