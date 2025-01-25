class Student{
    constructor(stname,stclass){
        this.stname = stname;
        this.stname = stclass;
    };
    updateclass = (newclass) =>{
        this.stclass = newclass;
    }
    updateName = (newName) =>{
        this.stName = newName;
    }

}
let st1 = new Student("muskan", "12th");
let st2 = new Student("arpit", "10th");
let st3 = new Student("lokesh", "11th");

// let classInput = document.getElementById('class');
// let btn = document.getElementById('btn');

// btn.addEventListener('click',function(){
//     st1.updateclass(classInput.value);
//     console.log(st1);
// })

//console.log(st1,st2,st3);

let group = [st1, st2 ,st3];

console.log(group);

//update Data
st1.updateclass("11th");
st2.updateName("mussu");


//console.log(st1);
//console.log(typeof(st1));





