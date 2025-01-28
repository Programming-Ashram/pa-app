// try {
//     let x = 40;
//     console.log(x);
// } catch (error) {
//     console.error("Something Went wrong");
// }finally{
//     console.log("Try and Catch Method");
// }

// let name = "Jeeshan";
// let head = document.getElementById('head');
// head.innerHTML += `Hello My name is ${name}`;
// class Students { 
//     constructor(name, lname) {
//         this.name = name;
//         this.lname = lname;
//     }
// }

// let st1 = new Students('Ayushman', "chaurasia");
// let st2 = new Students('Ameen', "Khan");
// let st3 = new Students('Taslim', "Khan");
// let st4 = new Students('Pranjal', "Mankar");

// let groupStudents = [st1, st2, st3, st4];

// let data = document.getElementById('data');

// groupStudents.forEach(student => {
//     data.innerHTML +=`
//         <li>${student.name} ${student.lname} </li>
//     `;
// });


// let obj = {
//    name: "Pranjal"
// }

// console.log(obj.name);

const template = {
    fullName : function (){
        return  "Hello My Name is  "+ this.fname + " My Surname is " + this.lname;
    }
};

let data1 = {
    fname: "Muskan",
    lname: "Sharanagat",
}

console.log(template.fullName.call(data1));


let user1 =  {
    firstname: "ayushman",
    lname: "Chaurasiya",

    // Private Method
    fullName : function (){
        return  "Hello My Name is  "+ this.firstname + " My Surname is " + this.lname;
    }
}

let user2 =  {
    firstname: "Pranjal",
    lname: "Mankar"
}

let user3 = {
    firstname: "Jeeshan",
    lname: "Shaikh"
}

// let getData = user2.fullName();
// let getData = user1.fullName.bind(user2);
// console.log(getData())

// let user3data = user1.fullName.bind(user3);
// console.log(user3data());

// console.log(getData);
// console.log(user1.fullName.call(user1));


