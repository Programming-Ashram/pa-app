class Student{
        constructor(stName, stClass){
            this.stName = stName;
            this.stClass = stClass;
        }
        updateClass = (newClass)=>{
            this.stClass = newClass;
         }
         updatesClass = (newName)=>{
            this.stName = newName;
         }
};
 
let st1 = new Student("ameen", "12th");
let st2 = new Student("jeeshan", "12th");
let st3 = new Student("taslim", "12th");
let st4 = new Student("pranjal", "12th");
 
let classInput = document.getElementById("class");
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    st1.updateClass(classInput.value);
    console.log(st1);
})

let groups = [st1, st2, st3, st4];
 console.log(groups);
// updatedata
st1.updateClass("collage");
st1.updatesName("Aami");

console.log(st1);
console.log(typeof(st1));
