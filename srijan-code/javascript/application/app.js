
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
// let head = document.getElementById('heading');
// let x = head.parentElement;
// x.setAttribute('class', 'text-success');
// console.log(head);
// document.getElememtsByClass()
// document.getElememtsByTagNames()
// document.querySelector()
// document.querySelectorAll()
// document.querySelectorAll()

// // Create 
// document.createElement()
// element.appendChild()
// document.setAttribute()


// function srijanfn(){
//     alert(srijan);
// }


// function shivamfn(){
//     alert(shivam);
// }
// shivamfn()

// let srijan = "Srijan";
// let shivam = "Shivam";
// simple function
// function fetchData(){
//     console.log(srijan)
// }
// fetchData();
// nested function
// Parent FUnction
// function header(){
//     // Local Scope
//     let head = 'Header';
//     console.log(head);

//     // Child Nested Function
//     function nav(){
//         // Local Scope
//         let navigation = "Menu";
//         console.log(navigation)
//     }nav();
// }header();
// arrow function
// let deleteData = () =>{
//     console.log("Delete Function is called")
// }
// deleteData();
// function with parameter
// function add(x, y){
//     console.log(x + y);
// }
// add(10, 40);
// Instant invoke funtion / Anonymuous Function
// (function(){
//     alert("Hello I am invok fn")
// })();
// (()=>{
//     alert("Hello I am invok fn")
// })();
// clouser function
// function parentFn(){
//     let x = 10; //number
//     function childFn(){
//         let y = 20; // number
//         function total(){
//             console.log(x + y);
//         }total();
//     }childFn();
// }
// parentFn();

// let heading = document.getElementById('heading');
// console.log(heading.nextElementSibling);