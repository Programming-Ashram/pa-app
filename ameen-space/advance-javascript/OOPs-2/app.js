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

let cars = [car1,car2,car3,car4]
let bikes = [bike1,bike2,bike3]
let cycles = [cycle1,cycle2 ,cycle3];

let showroom = [cars, bikes, cycles];
let allgadgets = showroom.flat();

let carData, bikeData, CycleData, gadgets;

carData = document.getElementById('carData');
bikeData = document.getElementById('bikeData');
cycleData = document.getElementById('cycleData');
gadgets = document.getElementById('gadgets')
cargadgets = document.getElementById('cargadgets');
bikegadgets = document.getElementById('bikegadgets');
cyclegadgets = document.getElementById('cyclegadgets');

gadgets.innerHtml = `${allgadgets.length}`;
cargadgets.innerHtml = `0${ cars.length}`;
bikegadgets.innerHtml = `0${bikes.length}`;
cyclegadgets.innerHtml = `0${cycles.length}`;

for(let i = 0; i < cars.length; i++){
    carData.innerHTML +=`
        <div class='col-md-4 my-3'>
        <div class='card p-3'>
                <h1 class='title'>${cars[i].productName}</h1>
                 <h5 class='subtitle'>${cars[i].color}</h5>
        </div>
        </div>
    `;
}

for(let x = 0; x < bikes.length; x++){
    bikeData.innerHTML +=`
        <div class='col-md-4 my-3'>
        
        <div class='card p-3'>
                <h1 class='title'>${bikes[x].productName}</h1>
                 <h5 class='subtitle'>${bikes[x].color}</h5>
        </div>
        </div>
    `;
}

for(let c = 0; c < cycles.length; c++){
    cycleData.innerHTML +=`
        <div class='col-md-4 my-3'>
        <div class='card p-3'>
                <h1 class='title'>${cycles[c].productName}</h1>
                 <h5 class='subtitle'>${cycles[c].color}</h5>
        </div>
        </div>
    `;
}

