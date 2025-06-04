// let fruits = ["Apple", "Banana", "Orange", "Mango", "Guava", "Pineapple"];

// // console.log(fruits[0], fruits[1], fruits[2], fruits[3]);

// // for loop retuns index - (as a number)
// for(let i = 0; i < fruits.length; i++){
//   console.log(i)
// }

// // for of - Return Value
// for(let i of fruits){
//   console.log(i)
// }

// // for in - return index (as a string)
// for(let i in fruits){
//   console.log(i);
// }

// // for each
// fruits.forEach(i =>{
//   console.log(i)
// })


let name1 = "Arpit";
let name2 = "Muskan";
let name3 = "Lokesh";

// Simple Function

// function arpit() {
//   alert(name1);
// }
// function muskan(){
//   alert(name2);
// }

// function lokesh(){
//   alert(name3);
// }


// Arrow Function

// let arpit = () =>{alert(name1);}
// arpit()


// let muskan = () =>{alert(name2);}
// muskan()

// let lokesh = () =>{alert(name3);}
// lokesh()

// Anonymus Function / Instant Invoke Function

// (function(){
//   alert(name1);
// })();

// With parameters
// function calculation(num1, num2){
//   let count = num1 + num2;
//   console.log(count);
// }

// calculation(30, 30);

// function calculation(fname, lname){
//   let fullname = fname + " " + lname;
//   console.log(fullname);
// }

// calculation("Ayushman", "Chaurasiya");

// Nested Function

// function parentfn(){
//   let x = "Parent Function";
//   console.log(x);
//   function child1(){
//     let y = "Child1 Function";
//     console.log(y);
//     function child2(){
//       let z = "Child2 Function";
//       console.log(z);
//     }child2()
//   }child1()
// }
// parentfn();


// Clouser Function
function parentfn(){
  let x = 70;
  function child1(){
    let count = x + 30;
    console.log(count);
  }child1()
}
parentfn();