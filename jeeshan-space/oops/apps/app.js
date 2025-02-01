

// class Car{
//     constructor(carName, carPrice, carColor){
//         this.carName = carName;
//         this.carPrice = carPrice;
//         this.carColor = carColor;
//     }

//     updateColor = (newColor, newPrice)=>{
//         this.carColor = newColor;
//         this.carPrice = newPrice;
//     }
    
// };

// let car1 = new Car("Audi", "30,00,000", "white");
// let car2 = new Car("Range rover","2,00,00,000","black");

// car2.updateColor("white", "2,35,00,000")
// let car3 = new Car("Aston matin","20,00,00,000","vantage black");

// let luxuriescar = [car1, car2, car3];

// console.log(luxuriescar);

// luxuriescar.forEach(car =>{
//     console.log(car.carName);
// })

class Car{
    constructor(productName, color){
        this.productName = productName;
        this.color = color;
    }
};

class Bike extends Car{}
class Cycle extends Bike{}

let car1 = new Car('BMW', "Black");
let car2 = new Car('aston matin', "Blue");
let car3 = new Car('ferarri', "White");
let car4 = new Car('Range rover', "Red");
let bike1 = new Bike('Thunder', "Red");
let bike2 = new Bike('Bullet', "Red");
let bike3 = new Bike('pulsar', "Red");
let Cycle1 = new Cycle('Hercules', "green");
let Cycle2 = new Cycle('Ranger', "Red");
let Cycle3 = new Cycle('canyon', "black");

let cars =[car1, car2, car3, car4]
let bikes =[bike1, bike2, bike3]
let cycles =[Cycle1, Cycle2, Cycle3];

let showroom = [cars, bikes, cycles];

let allItems = showroom.flat();

let carData, bikeData, cycleData,items;

carData = document.getElementById('carData');
bikeData = document.getElementById('bikeData');
cycleData = document.getElementById('cycleData');
items = document.getElementById('items');
caritems = document.getElementById('caritems');
bikeitems = document.getElementById('bikeitems');
cycleitems = document.getElementById('cycleitems');

items.innerHTML = `${allItems.length}`;
caritems.innerHTML = `0${cars.length}`;
bikeitems.innerHTML = `0${bikes.length}`;


for(let i = 0; i < cars.length; i++){
    carData.innerHTML += `
        <div class ='col-md-4 my-2'>
            <div class = card p-3'>
                <h1 class='title'>${cars[i].productName}</h1>
                <h4 class='subtitle'>${cars[i].color}</h4>
            </div>
        </div>
    `;
}


