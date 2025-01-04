
// var x = 90;

// BOM 
// alert(x - 1);
// console.log(x - 2);
// document.writeln("Srijan");
// prompt("What is our age");
// confirm("Are you want to delete");

// DOM
// document.querySelector('h1').innerText = "Srijan";
// document.querySelector('h1').style.color = "blue";
// document.querySelector('h1').style.backgroundColor = "pink";

// variables

// var x  = 5;
// var x  = 10;
// x = 100;
// console.log(x);

// let x  = 5;
// x = 10;
// x = 600;
// console.log(x);

// const x = 1;
// console.log(x);

// Data Types = Premetive & NoN Premetive

// var x = null; //number
// console.log(typeof(x));
// var x = "10" // string
// var lightOn = true || false; // boolean
// var y; // Undefined
// var salery = null; // Null

// NoN Premetive
// var employees = [
//     {
//         empName: "Ansh",
//         empSalery : "1Lac",
//         empDesintaion: "Software Developer"
//     },
//     {
//         empName: "Ayushman",
//         empSalery : "1Lac",
//         empDesintaion: "Software Developer"
//     },{
//         empName: "Shivam",
//         empSalery : "",
//         empDesintaion: "Software Developer"
//     },{
//         empName: "",
//         empSalery : "1Lac",
//         empDesintaion: "Software Developer"
//     }
//     ,{
//         empName: "Srijan",
//         empSalery : "1Lac",
//         empDesintaion: "Software Developer"
//     }
// ];
// Array -====[0]======-=[1]=======[2]

// for loop (index as a number)
// for(let i = 0; i < group.length; i++){
//     console.log(i + " " + typeof(i));
// }

// for in loop
// for(let i in group){
//     console.log(i + " " + typeof(i));
// }

// for of loop
// for(let i of group){
//     console.log(i + " " + typeof(i));
// }

// while loop (in array index as a number)
// var group = ["Apple", "Banana", "Grapes"];
// var i = 0;
// while (group[i]) {
//     console.log(i);
//     i++;
// }

// let x = 0;
// while (x <= 10) {
//     console.log(x);
//     x++;
// }
// do while loop (in array index as a number)

// let x = 0; 
// do {
//     console.log(x);
//     x++;
// } while (x <= 20);

// for each loop

// let btn = document.querySelectorAll('button');
// var group = ["Apple", "Banana", "Grapes"];

// Array (Values) Html Elements  we can access each group elements
// group.forEach(i => {
//    console.log(i);
// });

// for(let i in btn){
//     btn[i].addEventListener('click', function(){
//         alert(btn[i].innerText);
//     })
// }

// DOM Method

// Access html to js
let head = document.getElementById('heading');
let x = head.parentElement;
x.setAttribute('class', 'text-success');
console.log(head);
// document.getElememtsByClass()
// document.getElememtsByTagNames()
// document.querySelector()
// document.querySelectorAll()
// document.querySelectorAll()

// // Create 
// document.createElement()
// element.appendChild()
// document.setAttribute()