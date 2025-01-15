
class Car{
    // constructor Object props Storation 

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
