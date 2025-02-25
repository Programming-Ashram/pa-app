// for loop
let students = [
    {
        name: "Ayushman",
        age: 23,
        class : "12th"
    },
    {
        name: "Nidhi",
        age: 24,
        class : "12th"
    },
    {
        name: "Muskan",
        age: 25,
        class : "12th"
    },{
        name: "Lokesh",
        age: 26,
        class : "12th"
    }
];

let body = document.querySelector('body');
let createSec = document.createElement('section');
let secContainer = document.createElement('div');
let secRow = document.createElement('div');


body.appendChild(createSec);
createSec.appendChild(secContainer);
secContainer.appendChild(secRow);

secContainer.setAttribute('class', 'container');
secRow.setAttribute('class', 'row');

for(let i = 0; i < students.length; i++){
    console.log(students[i].name)
    secRow.innerHTML +=`
        <div class='col-md-3'>
            <div class='card border-0 shadow-sm rounded-0'>
                <div class='card-body'>
                    <h4>${students[i].name} | Age : ${students[i].age}</h4>
                    <span class='badge bg-primary-subtle text-primary rounded-0'>${students[i].class}</span>
                </div>
            </div>
        </div>
    `;
}
// for in loop
// for(let i in students){
//     console.log(typeof(i))
// }
// for of loop
// for(let i of students){
//     console.log(typeof(i))
// }
// foreach loop
// students.forEach(i =>{
//     console.log(i);
// })
// while loop
// let x = 1;
// while (x < 10) {
//     console.log(x);
//     x++;
// }
// do while loop
// do{
//     console.log(x);
//     x++;
// }while (x <= 10);