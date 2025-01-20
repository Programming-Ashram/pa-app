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
// class Car{
//     // Custurctor Object props Storation
//     constructor(carName, carPrice, carColor){
//         this.carName  = carName;
//         this.carPrice  = carPrice;
//         this.carColor  = carColor;
//     }

//     // Method
//     updateColor = (newColor, newPrice)=>{
//         this.carColor = newColor;
//         this.carPrice = newPrice;
//     }
// };

// // Instanse Of Object
// let car1 = new Car("Audi", "30,0000", "Black");

// // Update Object by using method
// car1.updateColor("Blue", "40,0000");

// let car2 = new Car("BMW", "20,0000", "Black");
// let car3 = new Car("Swift", "10,0000", "Black");

// let groupCar = [car1, car2, car3];

// console.log(groupCar);

// groupCar.forEach(car =>{
//     console.log(car.carPrice);
// })

// console.log(typeof(Car));

//    Inheritance

class Car{
    constructor(productName,color){
        this.productName = productName;
        this.color = color;
    }
};
 class Bike extends Car{}
 class Cycle extends Bike{}

 let car1 = new Car('THAR', "BLACK");
 let car2 = new Car('KEA', "WHITE");
 let car3 = new Car('Swift', "White");
 let car4 = new Car('Ertiga', "red");
 let bike1 = new Bike('NINJA', " Black");
 let bike2 = new Bike('Shine', "black");
 let bike3 = new Bike('Pulsar', "white");
 let bike4 = new Bike('HAYABUSHA','BLACK')
 let cycle1 = new Cycle('Ranger', "Brown");
 let cycle2 = new Cycle('Hero', "Gray");
 let cycle3 = new Cycle('Hurculas', "Gray");

 let cars = [car1, car2, car3, car4]
let bikes = [bike1, bike2, bike3,bike4]
let cycles = [cycle1, cycle2, cycle3];

let showroom = [cars, bikes,cycles];

let allItems = showroom.flat();


let carData, bikeData, CycleData, items;

carData = document.getElementById('carData');
bikeData = document.getElementById('bikeData');
CycleData = document.getElementById('cycleData');
items = document.getElementById('items');
caritems = document.getElementById('caritems');
bikeitems = document.getElementById('bikeitems');
cycleitems = document.getElementById('cycleitems');

items.innerHTML =`${allItems.length}`;
caritems.innerHTML =`0${cars.length}`;
bikeitems.innerHTML =`0${bikes.length}`;
cycleitems.innerHTML =`0${cycles.length}`;


for(let i = 0; i < cars.length; i++){
    carData.innerHTML += `
    <div class='col-md-4 my-2'>
        <div class='card p-3'>
            <h1 class='title'>${cars[i].productName}</h1>
            <h4 class='subtitle'>${cars[i].color}</h4>
        </div>
    </div>
    `;
}

for(let c = 0; c < cycles.length; c++){
    CycleData.innerHTML += `
    <div class='col-md-4 my-4'>
        <div class='card p-3'>
            <h1 class='title'>${cycles[c].productName}</h1>
            <h4 class='subtitle'>${cycles[c].color}</h4>
        </div>
    </div>
    `;
}

for(let x = 0; x < bikes.length; x++){
    bikeData.innerHTML += `
    <div class='col-md-4 my-3'>
        <div class='card p-3'>
            <h1 class='title'>${bikes[x].productName}</h1>
            <h4 class='subtitle'>${bikes[x].color}</h4>
        </div>
    </div>
`;
}

console.log(cars);
console.log(bikes);
console.log(cycles);
