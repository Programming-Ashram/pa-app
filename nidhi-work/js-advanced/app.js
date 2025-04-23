// let obj = [
//   {

//   }
// ]






// OOPS = Object Oriented Programming Syntax

// function Car(){}

class Vehical{
  constructor(VehicalColor, VehicalPrice, VehicalBrand){
    this.VehicalColor = VehicalColor;
    this.VehicalPrice = VehicalPrice;
    this.VehicalBrand = VehicalBrand;
  }
}

class Car extends Vehical{}
class Bike extends Car{}
class Cycle extends Bike{}


// Instance Of object (new)
let car1 = new Car("Black", "45000", "Audi");
let bike1 = new Bike("Black", "45000", "Hero Honda");
let cycle1 = new Cycle("Black", "45000", "Ranger");

console.log(car1, bike1, cycle1);