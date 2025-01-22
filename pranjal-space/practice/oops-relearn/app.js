// class Student{
//          constructor(stName, stClass){
//              this.stName = stName;
//              this.stClass = stClass;
//          };
//          updateClass = (newClass) =>{
//              this.stClass = newClass;
//          }
//          updatestName = (newName) =>{
//              this.stName = newName;
//          }
//      };
//      let st1 = new Student("Ayushman", "12th");
//      let st2 = new Student("Pranjal", "10th");
//      let st3 = new Student("Muskan", "11th");
    
//      let classInput = document.getElementById('class');
//      let btn = document.getElementById('btn');
//      btn.addEventListener('click', function(){
//          st1.updateClass(classInput.value);
//          console.log(st1);
//      })
//      console.log(st1, st2, st3);
//      let groups = [st1, st2, st3];
//      console.log(groups);
//      // Update Data
//      st1.updateClass("11th");
//      st1.updatestName("Ansh");
//      console.log(st1);
//      console.log(typeof(st1));
    
//      function Teacher(tName, tClass){
//          let teacher1 = tName +" "+tClass
//          console.log(teacher1);
//          console.log(typeof(teacher1));
//     }
    
//      Teacher("Pranjal", "Mankar");
class student{
    constructor(){
        var name;
        var email;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getEmail(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
}
let st1 = new student();

st1.setName("pranjal");
st1.setEmail("pranjal33@gmail.com");

let st2 = new student();

st2.setName("Rina");
st2.setEmail("Rina33@gmail.com");

let st3 = new student();

st3.setName("Prakash");
st3.setEmail("prakash@gmail.com")

let groups = [st1,st2, st3]
console.log(groups);


class friend{
    constructor(){
        var name;
        var age;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getAge(){
        return this. age;
    }
    setAge(age){
        this.age = age;
    }
}

let fn1 = new friend ();
fn1.setName("pranjal");
fn1.setAge("22");

let fn2 =  new friend ();

fn2.setName = ("rina");
fn2.setAge =  ("26");

let fn3 = new friend ();

fn3.setName = ("prakash"); 
fn3.setAge =("24");

let group = [fn1,fn2,fn3]
console.log(group)