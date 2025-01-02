// let array = ["Jinat","Taslim", "Ameen", "Muskan"];
// let ages = [12,23, 11, 89];

// let nestedArray = [["Apple", "Banana", "Grapes"], ["Bhata", "Palak", "Methi"], ["Chicken Masala", "Matan Masala", "Paneer Masala"]];

// let newArray = nestedArray.flat();

// console.log(newArray);

// Push 
// array.push("Jeeshan");
// array.push("Pranjal");

// Unshift
// array.unshift("Jeeshan");
// array.unshift("Pranjal");

// POP
// array.pop();

// Sift
// array.shift();

// let array = ["Jinat","Taslim", "Ameen", "Muskan", "Pranjal"];

// let newArray = array.toSpliced(1, 3);

// console.log(newArray);
// let array = ["a", "h", 'b', "i"];
// console.log(array.sort());


let userinput, list;
userinput = document.getElementById("userinput");
list = document.getElementById("list");
let array = [];
function addTodos() {
    let array = [];
    let newArray = array.push(userinput.value);

   for(let i = 0; i < array.length; i++){
        list.innerHTML +=`
            <li>${array[i]}</li>
        `;

        console.log(array.flat())
   }
}