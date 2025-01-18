// class User{
//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// // Template
// User.prototype.fullname = () =>{
//     return this.fname + " " + this.lname;
// }

// // Instanse of object
// let user1 = new User("Jeeshan", "Shaikh");

// user1.fullname();

// console.log(user1);


// class Details {
//     constructor() {
//         this.item = "2-Wheeler";
//         this.showroom = "Honda Showroom";
//     }
// }

// class Bike extends Details{
//     constructor(name, color){
//         super();
//         this.name = name;
//         this.color = color;
//     }
// }

// let vehical1 = new Bike("Honda", "Black");
// let vehical2 = new Bike("Lio", "Gray");

// let allItems = [vehical1, vehical2];

// console.log(allItems);



class Car {
    constructor() {
        var name;
        var color;
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }
}

let car1 = new Car();

car1.setName("BMW")
car1.setColor("red");

console.log(car1.getName() +" "+car1.getColor());