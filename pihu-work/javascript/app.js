// alert("Hello");
// console.log("Hello");
// document.write("Hello");
// confirm("Are you want to delete this...?");
// prompt("Please Enter your name...");
// console.error("This is test error...");

// Variable
// var (keyword)
// var name = "Pihu";
// var name = "Muskan";
// console.log(name);
// let (keyword)
// let name = "Pihu";
// let name = "Muskan";
// console.log(name);
// const (keyword)
// const num = 500;
// console.log(num);


// let result1 = 50;
// let result2 = 50;

// let finalResult = result1 + result2;

// console.log(finalResult);

// let agree = document.getElementById("agree");

// function checkCondtion(){
//   if(agree.checked == true){
//     console.log("Your are Agree");
//   }else{
//     console.log("Your are not agree")
//   }
// }

// Data Types
// // 1. Premitive
//       // a. String,
//       let name = "Muskan";
//       console.log(typeof(name));
//       // b. Number,
//       let num = 40;
//       console.log(typeof(num));
//       // c. Undefined,
//       let name1;
//       console.log(typeof(name1))
//       // d. Boolean,
//       let bulb = false;
//       console.log(typeof(bulb))
//       // e. Null
//       let salary = null;
//       console.log(typeof(salary));

// // 2. Non Premotive
//       // a. Array,
//       let fruits = ["Apple", "Banana", "Mango", "Orange"];
//       console.log(typeof(fruits));
//       // b. Object,
//       let person = {
//         name: "Muskan",
//         age: 23,
//         city: "Delhi"
//       }
//       console.log(typeof(person));

// DOM

let nameid = document.getElementById('name');
console.log(nameid.innerHTML);
let nameclass = document.getElementsByClassName('name')[2];
console.log(nameclass.innerText)
let nameTag = document.getElementsByTagName('h2')[1];
console.log(nameTag.innerText)
let nameQuery = document.querySelector('.name');
let namequeryAll = document.querySelectorAll('.name')[0];
console.log(namequeryAll);

let newName = document.getElementById('newName');

newName.innerText += " Himanshi";
newName.style.color = "black";
newName.style.backgroundColor = " Yellow";