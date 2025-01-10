..// let array = [["Muskan","Ayushman", "Pranjal", "Jinat"], [1, 2, 3, 4, 5, 6, 7], ["UI Dev", "UI Dev", "UI Dev"]];

// let array1 = [1, 2, 3, 4, 5, 6, 7];
// let array2 = ["Apple", "Banana", "Grapes", "Mango"];

// let array = ["a", "c", "e", "b" , "d"];
// console.log(array.sort());

// let array = ["Muskan","Ayushman", "Pranjal", "Jinat", "Lokesh"];
// let newarray = array.toSpliced(0, 2);
// array.pop();
// let newarray = array.slice(0, 3);
// let newarray = array.splice(0, 2);
// console.log(newarray);

// let newArray2 = array1.concat(array2);
// console.log(newArray2);
// array.push("Muskan");
// array.unshift("Muskan");
// array.unshift("Taslim");

// array.shift();

"use strict";

// step 1
let alertPop = document.getElementById('alert');

function openModal(){
    // alertPop.classList.add('anim');
    alertPop.classList.add('active');
    // alertPop.style.display= "block";
}

// setTimeout(function(){});
setTimeout(()=>{
    if(alertPop){
        alertPop.classList.remove('active');
    }else{
        console.log("Alert is of")
    }
}, 4000);

// y = 10;
// y = 60;
// let x = 70;
// console.log(y + x);

// Hoisting
a = 10;
console.log(a);
var a;