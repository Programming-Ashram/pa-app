// class Student{
//     constructor(fname, lname){
//         this.fname = fname;
//         this.lname = lname;
//     }

//     fullname = function(){
//         return "Hello I am "+ this.fname +" "+ this.lname; 
//     }
// }

// let st1 = new Student("Ayushman", "Chaurasiya");

// console.log(st1.fullname());


// class Vehical{
//     constructor(vehicalName, vehicalPrice, vehicalColor){
//         this.vehicalName = vehicalName;
//         this.vehicalPrice = vehicalPrice;
//         this.vehicalColor = vehicalColor;
//     }
// }

// class Car extends Vehical{};
// class Bike extends Car{}

// let car1 = new Car("BMW", "30L", "Black");
// let bike1 = new Bike("Honda", "2L", "Gray")

// console.log(bike1);

// class Company{
//     constructor(){
//         this.myCompany = "Programming Ashram";
//         this.founder = "Ayushman"
//     }
// }

// class Bilaspur extends Company{
//     constructor(courseName, CourseDuration){
//         super();
//         this.courseName = courseName;
//         this.CourseDuration = CourseDuration;
//     }
// }


// let data1 = new Bilaspur("FrontEnd", "8 month");
// let data2 = new Bilaspur("BackEnd", "3 Month")

// console.log(data1, data2);

// class Header{
//     constructor(){
//         var logo;
//         var address;
//         var phone;
//     }

//     setLogo = (logo) =>{
//         this.logo = logo;
//     }

//     getLogo = () =>{
//         return this.logo;
//     }

//     setAddress = (address) =>{
//         this.address = address;
//     }

//     getAddress = () =>{
//         return this.address;
//     }

//     setPhone = (phone) =>{
//         this.phone = phone;
//     }

//     getPhone = () =>{
//         return this.phone;
//     }
// }

// let headerData = new Header();

// headerData.setLogo("Website");
// headerData.setAddress("Waraseoni - Madhaya Pradesh");
// headerData.setPhone('878779978');

// let headerElements = document.getElementById('headerElements');

// headerElements.innerHTML +=`
//     <div class='col-md-6'>
//         <h1>${headerData.getLogo()}</h1>
//     </div>
//     <div class='col-md-6'>
//         <ul class='list-unstyled d-flex gap-3 m-0 justify-content-end'>
//             <li class='nav-item'><a class='nav-link' href='#'><i class='fa-solid fa-map'></i> ${headerData.getAddress()}</a></li>
//             <li class='nav-item'><a class='nav-link' href='#'><i class='fa-solid fa-phone'></i> ${headerData.getPhone()}</a></li>
//         </ul>
//     </div>
// `;


class A {  
     display(){  
      console.log("hi I am Dynamic Method")
    }  
}  

class B extends A{}  

var b = new B();  
b.display();  
