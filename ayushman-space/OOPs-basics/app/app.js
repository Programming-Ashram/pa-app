// JavaScript OOPs
    // JS OOPS Class
    // JS Object
    // JS Prototype
    // JS constructor Method
    // JS static Method
    // JS Encapsulation
    // JS Inheritance
    // JS Polymorphism
    // JS Abstraction
    // JavaScript Oops Classes

// function test(){
//     console.log("Hello I am function")
// };


// let car = {
//     carName: "Audi",
//     carPrice: "Audi",
//     carColor: "Audi",
// }

// Class Function
class Car{
    // Custurctor Object props Storation
    constructor(carName, carPrice, carColor){
        this.carName  = carName;
        this.carPrice  = carPrice;
        this.carColor  = carColor;
    }

    // Method
    updateColor = (newColor, newPrice)=>{
        this.carColor = newColor;
        this.carPrice = newPrice;
    }
};

// Instanse Of Object
let car1 = new Car("Audi", "30,0000", "Black");

// Update Object by using method
car1.updateColor("Blue", "40,0000");

let car2 = new Car("BMW", "20,0000", "Black");
let car3 = new Car("Swift", "10,0000", "Black");

let groupCar = [car1, car2, car3];

console.log(groupCar);

groupCar.forEach(car =>{
    console.log(car.carPrice);
})

// console.log(typeof(Car));
