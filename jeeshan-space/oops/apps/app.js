

class Car{
    constructor(carName, carPrice, carColor){
        this.carName = carName;
        this.carPrice = carPrice;
        this.carColor = carColor;
    }

    updateColor = (newColor, newPrice)=>{
        this.carColor = newColor;
        this.carPrice = newPrice;
    }
    
};

let car1 = new Car("Audi", "30,00,000", "white");
let car2 = new Car("Range rover","2,00,00,000","black");

car2.updateColor("white", "2,35,00,000")
let car3 = new Car("Aston matin","20,00,00,000","vantage black");

let luxuriescar = [car1, car2, car3];

console.log(luxuriescar);

luxuriescar.forEach(car =>{
    console.log(car.carName);
})


