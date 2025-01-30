// try {
//     let x = 40;
//     console.log(x);
// } catch (error) {
//     console.error("Something Went wrong");
// }finally{
//     console.log("Try and Catch Method");
// }

let name = "Jeeshan";

let head = document.getElementById('head');
head.innerHTML += `Hello My name is ${name}`;

class Students {
    constructor(name, lname) {
        this.name = name;
        this.lname = lname;
    }
}

let st1 = new Students('Ayushman', "chaurasia");
let st2 = new Students('Ameen', "Khan");
let st3 = new Students('Taslim', "Khan");
let st4 = new Students('Pranjal', "Mankar");

let groupStudents = [st1, st2, st3, st4];

let data = document.getElementById('data');

groupStudents.forEach(student => {
    data.innerHTML +=`
        <li>${student.name} ${student.lname} </li>
    `;
});
