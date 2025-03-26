let car = [
    {
        carName: 'Audi',
        carPrice:'500000',
        carColor:'Black',
    }
]
console.log(car)
class Car{
    constructor(carName, carPrice, carColor){
        this.carName = carName;
        this.carPrice = carPrice;
        this.carColor = carColor;
    }
}

let car1 = new Car("Audi", "500000","Black");

console.log(car1);


try {
    let carName = "BMW";
    if(carName === "Audi"){
        console.log("THIS IS AUDI");
    }
    else{
        throw new Error("This is not Audi");
    }
} catch (error) {
    console.log(error);
}finally{
    console.log("Car Name Should be Audi")
}

class A{
    constructor(){
        this.type = "Student";
        this.company = "Google"
    }
}

class B extends A{
    constructor(name, surname){
        super();
        this.name = name;
        this.surname = surname;
    }
}

let b = new B("Muskan","Kumari");
let c= new B("Jeeshan", "Khan");


