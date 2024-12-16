// let jeeshan = document.querySelector("#jeeshan");
// let pranjal = document.querySelector("#pranjal");
// let body = document.querySelector('body');
// jeeshan.style.display = 'none';
// pranjal.style.display = 'none';

// function jeeshanShow(){
//     jeeshan.style.display = 'block';
//     pranjal.style.display = 'none';
// }

// function pranjalShow(){
//     pranjal.style.display = 'block';
//     jeeshan.style.display = 'none';
// }                                                                         

// testQSD
// function test(){
//     body.style.background = "blue";
// }     
 
// let  box = document.querySelector('#box');
// // Mouse
// function colorChanging(){
//     box.style.width = "gray";
// }
// function colorLeave(){
//     box.style.background = "";
// }

// let box = document.querySelector('#input');

// function keyDownState(){
//     box.style.background = "red";
// }

// function keyUpState(){
//     box.style.background = "orange";
// }

// function keyUPress(){
//     box.style.background = "green";
// }

// Move
// function changeColor(){
//     box.style.background = "red";
// }

// // Leave
// function changeColorLeave(){
//     box.style.background = "orange";
// }

// // Eneter
// function changeColorState(){
//     box.style.background = "yellow";
// }

// // Down
// function changeColorDown(){
//     box.style.background = "green";
// }

// // Up
// function changeColorUp(){
//     box.style.background = "purple";
// }

// // Over
// function changeColorOver(){
//     box.style.background = "pink";
// }

// Blur
<<<<<<< HEAD
let square = document.querySelector('#square');
function changeColor(){
        square.style.background = "red";
}
function changeColorDown(){
    square.style.background ="green"
}
function changeColorState(){
    square.style.background = "pink"
=======

let fruits = {
    Apple: 'https://thumbs.dreamstime.com/b/red-apple-leaf-slice-white-background-29914331.jpg',
    Banana: 'Hello I am Banana',
};

let inputData = document.getElementById('userInput');
let showApple = document.getElementById('showApple');

function matchedFruits(){
   if(inputData.value === "Apple"){
    showApple.innerHTML = `<img src='${fruits.Apple}' width='200'>`;
   }
   else if(inputData.value === "Banana"){
    showApple.innerHTML = fruits.Banana;
   }
   else{
    showApple.innerHTML = 'No Fruits Founds';
   }
>>>>>>> cfa60dc4c8f31ff8a7be8710357ef95163343b76
}