
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
let Car1 = new Car("Audi", "30,00,000", "white");
let Car2 = new Car("Bmw", "20,00,000", "vintage blue");
Car2.updateColor("white", "2,35,00,000");

let Car3 = new Car("Range rover","2,00,00,000","black");

let luxuriescar=[Car1, Car2, Car3];
console.log(luxuriescar);