"use strict";
// Document get Element by id
// Document get elements by class name
// Document querySelector // access 0 indexing element 
// Document querySelectorAll [] as a node
// Document get ElementsByTagNames

// let heading = document.getElementsByTagName('h1'); [] html collection
// let heading = document.getElementById('heading'); single 
// let heading = document.getElementsByClassName('heading'); []
// console.log(heading[0].innerText);
// console.log(heading.innerHTML);

// let heading = document.querySelector('h1');
// let heading = document.querySelector('#heading');
// let heading = document.querySelector('.heading');

// let heading = document.querySelectorAll('h1');

// for(let i = 0; i < heading.length; i++){
//     // This is provided inline css in html (Avoid it)
//     // heading[i].style.backgroundColor = "blue";
//     // heading[i].style.color = "white";
//     // heading[i].style.padding = "10px";

//     heading[i].setAttribute('class', 'heading--decoration');
// }

// let heading = document.querySelector('h1');
// let badge = document.createElement('span');

// heading.appendChild(badge);
// badge.innerText = ' 1';
// badge.setAttribute('class', 'text-color bg-primary');

// let tabs, tabContent;

// function myTab(tabId) {
//     tabContent = document.querySelectorAll('.tab-content');
//     tabContent.forEach(element => {
//         element.classList.remove('active');
//     });

//     document.getElementById(tabId).classList.add('active');
// }

// let obj = [
//     {
//         name: "Shivam",
//         age: 23,
//         salary: 3000,
//     },
//     {
//         name: "Shivam",
//         age: 23,
//         salary: 3000,
//     },{
//         name: "Shivam",
//         age: 23,
//         salary: 3000,
//     }
// ]

// let tab1Content = document.getElementById('tabrow');

// for(let i in obj){
//     tab1Content.innerHTML +=`
//         <div class='col'>
//             ${obj[i].name}
//             ${obj[i].age}
//             ${obj[i].salary}
//         </div>
//     `;
// }


let heading = document.createElement('h1');
let body = document.querySelector('body');

body.appendChild(heading);

heading.innerHTML = `Srijan <span>Tripathi</span>`;
heading.setAttribute('class', 'heading');
// Avoid 
heading.style.color = "red";
heading.style.backgroundColor = "blue";
heading.style.padding = "10px";
heading.style.lineHight = "3px";
heading.classList.add('bg-primary');

// Hoisting (Use before declear or Initialization)
x = 6; //assign
// console.log(x); // use
var x; // declear

// Use Strict
let y = 10;
let u = 80;
console.log(y);

// Array 
let array = ["Apple", "Banana", "Mango"];

// for in return indexing as a string
for(let i in array){
    console.log(i +" "+ typeof(i)  +" for in Loop ");
}

// for loop indexing ad number
for (let a = 0; a < array.length; a++) {
    console.log(a +" "+ typeof(a) +" for of Loop ");
}

// for of retuns value
for(let i of array){
    console.log(i +" "+ typeof(i) );
}

// For each loop
array.forEach(i =>{
    console.log(i +" "+ typeof(i) );
});

// Operators 
// Array Methods
// Advanced - OOPS