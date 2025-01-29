// ES6 - Arrow
// Echma Script 6


// Default Parameters 
function userName(name = "Please add values"){
    console.log(name);
}
userName();



// Normal function 
// function fn(){
//     console.log("Helo");
// }

// Arrow 
// let fn = () =>{
//     console.log("Helo");
// }

// Currying
// let cur = (a) => (b) => a + b;
// console.log(cur(10)(20));

// let testcur = (a, b) => a + b;
// console.log(testcur(10, 40));

// Spread
// let num1 = [1, 2, 3];
// let num2 = [...num1, 4, 5, 6];

// console.log(num2);

// Disturcting
// const arr = ["Apple", "Banana", "Grapes"];
const obj =  {
    fname: "Ayushman",
    age: 23,
    class_c: "12th"
}
const {fname, class_c, age, country = "india"} = obj;

console.log(fname, class_c, age, country);

let fisrtname = "Ayushman";
console.log(fisrtname);

// Class Obj
class Student{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    updateLname = (newlname) =>{
        this.lname = newlname;
    }
}

Student.prototype.fullname = function(){
    return this.fname + " " + this.lname; 
}

let st1 = new Student("Ayushman", "chaurasiya");
st1.updateLname("Patel");
console.log(st1.fullname())