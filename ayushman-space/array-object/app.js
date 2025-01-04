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
    // Create (C)
    let array = [];
    let newArray = array.push(userinput.value);

   for(let i = 0; i < array.length; i++){
    
        // Read (R)
        list.innerHTML +=`
            <li><span class='textData'>${array[i]}</span>  <button type="button" class="btn">Delete</button> </li>
        `;

        // Update (U)
        let textData = document.querySelectorAll('.textData');
        textData.forEach(i => {
            i.addEventListener('dblclick', ()=>{
                i.contentEditable = true;
            })
        });

        // Delete (D)
        let btn = document.querySelectorAll('.btn');
        btn.forEach(i => {
            i.addEventListener('click', ()=>{
                i.parentElement.style.display = "none";
            })
        });

   }
}

// CRUD - Operation


// let name = "Ayushman";

// setTimeout(()=>{
//     console.log(name);
// }, 3000)

// let array = [1,2,3, 4, 5, 6];
// let index = 0;
// setInterval(()=>{
//    console.log(array[index]);
//    index++
// }, 2000)


