// ES6 - Arrow
// Echma Script

// Default Parameters
function userName(name = "Please add values"){
    console.log(name);
}
userName();

// Normal Function
// function fn(){
//     console.log("hello");
// }

// Arrow  
// let fn = () =>{
//     console.log("hello");
// }


// Currying
// let cur = (a) => (b) => a + b;
// console.log(cur(10)(20));

// let testcur = (a, b) => a + b;
// console.log(testcur(10,40));

// Spread 
// let num1 = [1, 2, 3];
// let num2 = [...num1, 4, 5, 6];

// console.log(num2);

// Distructing
// const arr = ["Apple", "Banana", "Grapes"];
// const obj = {
//     fname:"pranjal",
//     age:23,
//     class_c: "12th"
// }

// const {fname, class_ , age, country = "india"} = obj;
// console.log(fname, class_c, age, country);

// let firstname = "pranjal";
// console.log(firstname);

// // Class Obj
// class Student{
//     constructor(fname, lname , class_c){
//         this.name = fname;
//         this.lname = lname;
//         this.class_c = class_c;
//     }
//     updateLname = (newlname) =>{
//         this.lname = newlname;
//     }
// }

// //
// Student.prototype.fullname = function(){
//     return this.fname +" "+ this.lname;
// }

// let st1 = new Student("pranjal" , "mankar");
// st1.updateLname(khan);
// console.log(st1.fullname())

// let st2 = new Student("rina","mankar");
// st1.updateLname()

