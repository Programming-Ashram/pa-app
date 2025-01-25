// class Student{
//     constructor(stName, stClass){
//         this.stName = stName;
//         this.stClass = stClass;
//     };
//     updateClass = (newClass) =>{
//         this.stClass = newClass;
//     }
//     updatestName = (newName) =>{
//         this.stName = newName;
//     }
// };

// let st1 = new Student("Ayushman", "12th");
// let st2 = new Student("Pranjal", "10th");
// let st3 = new Student("Muskan", "11th");

// let classInput = document.getElementById('class');
// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
//     st1.updateClass(classInput.value);
//     console.log(st1);
// })

// console.log(st1, st2, st3);

// let groups = [st1, st2, st3];
+
// console.log(groups);


// // Update Data
// st1.updateClass("11th");
// st1.updatestName("Ansh");


// console.log(st1);
// console.log(typeof(st1));

// function Teacher(tName, tClass){
//     let teacher1 = tName +" "+tClass
//     console.log(teacher1);
//     console.log(typeof(teacher1));
// }

// Teacher("Pranjal", "Mankar");

class Student{
    constructor(){
        var name;    
        var email;    
    }

    // Name
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }

    // Email
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }

}

let st1 = new Student();

st1.setName("Ayushman");
st1.setEmail("ansh@gmail.com");

let st2 = new Student();

st2.setName("Taslim");
st2.setEmail("taslim@gmail.com");

let groups = [st1, st2]
console.log(groups);