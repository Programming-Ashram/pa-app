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

// const template = {
//     fullName : function (){
//         return  "Hello My Name is  "+ this.fname + " My Surname is " + this.lname;
//     }
// };

// let data1 = {
//     fname: "Muskan",
//     lname: "Sharanagat",
// }

// console.log(template.fullName.call(data1));


// let user1 =  {
//     firstname: "ayushman",
//     lname: "Chaurasiya",

//     // Private Method
//     fullName : function (){
//         return  "Hello My Name is  "+ this.firstname + " My Surname is " + this.lname;
//     }
// }

// let user2 =  {
//     firstname: "Pranjal",
//     lname: "Mankar"
// }

// let user3 = {
//     firstname: "Jeeshan",
//     lname: "Shaikh"
// }

// let getData = user2.fullName();
// let getData = user1.fullName.bind(user2);
// console.log(getData())

// let user3data = user1.fullName.bind(user3);
// console.log(user3data());

// console.log(getData);
// console.log(user1.fullName.call(user1));


// clouser
// Global Scope
let x = 10;
function calculator(){
    // Local Scope
    // let x = 10;
    function sub(){
        console.log(x - 6);

        function add(){
            console.log(x + 6);
        }
        add();
    }sub();
}calculator()

function siblingFn(){
    console.log(x);
}
siblingFn();


// Call Back function
function template(getData){
    console.log("Hello My Name is "+ getData);
}

// --------[Ayushman]-[Chaurasiya]-------(template (as a function))
function work(fname, lname, myCallBack){
    // --Fetch Data 
    let fetchData = `${fname}  ${lname}`;
    // template()
    myCallBack(fetchData);
}

// -------------------------(Function as arg)
work("Ayushman", "Chaurasiya", template);


function testResult(prpos){
    console.log(prpos);
}


function apiDataStatus(props){
    console.log(props);
}


let myGreet = new Promise(function(myResolve, myReject){
    let fname;

    if(fname === "Pranjal"){
        myResolve("Found Pranjal");
    }
    else{
        myReject("Error");
    }
});
myGreet.then(
    function(value){apiDataStatus(value)},
    function(error){apiDataStatus(error)}
)






class SearchedCars{
    constructor(carImg, startPrice, endPrice, carName, carDtails){
        this.carImg = carImg;
        this.startPrice =startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDtails = carDtails;
    }
}


let skoda = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Skoda Kylaq", "#");

let mahindra = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Mahindra Scorpio N", "#");

let bolero = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Mahindra Bolero", "#");


// New Car
class ElectriCars extends SearchedCars{}

let Mahindra = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-BE/6e/9263/1732689215786/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Mahindra", "#");

let Vayve  = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Vayve-Mobility/Eva/9679/1737214352028/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Vayve", "#");

let Hyundai = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Hyundai", "#");



let allSearchedCars = [skoda, mahindra,bolero];
let allElectricCars = [Mahindra, Vayve, Hyundai];

let searchcarsArea = document.getElementById('allsearchedCars');
let allElectricArea = document.getElementById('allElectricCars');

allSearchedCars.forEach(car => {
    searchcarsArea.innerHTML +=`
        <div class='col-md-4'>
            <div class='card rounded-2 border shadow-sm'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="#" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});

allElectricCars.forEach(car => {
    allElectricArea.innerHTML +=`
        <div class='col-md-4'>
            <div class='card my-3 rounded-2 border shadow-sm'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="#" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});