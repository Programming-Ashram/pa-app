// //clouser
// //Global Scope

// let x = 10;
// function Calculator(){
//     // Local Scope
//     //let x = 10;
//     function sub(){
//         console.log(x-6);

//         function add (){
//             console.log(x + 6);
//         }
//         add();
//     }sub();
// }Calculator()

// function siblingFn(){
//     console.log(x);
// }
// siblingFn();

// //  call back function
// function template(getData){
//     document.writeln("hello  my name is "+ getData);
// }

// //---------------------[ayushman]--[chaurasiya]-----------(template(as a function))
// function work(fname, lname, myCallBack){
//     //----Fetch Data
//     let fetchData=`${fname} ${lname}`;
//     // template()
//     myCallBack(fetchData);
// }

// //----------------------(Function as arg)
// work("Prakash", "Mankar",template);

// function testResult(props){
//     console.log(props);
// }

// function apiDataStatus(props){
//     console.log("Hello " + props);
// }
// let myGreet = new Promise(function(myResolve, myReject){
   
//     if(fname === "pranjal"){
//         myResolve("found pranjal");
//     }
//     else{
//         myReject("Error");
//     }
// });
// myGreet.then(
//     function(value){apiDataStatus(value)},
//     function(error){apiDataStatus(error)}
// )

// 30/01/2025 practice start



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


let Fortuner = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "Rs.33.43 ", "51.94", "Fortuner", "#");



// New Car
class ElectriCars extends SearchedCars{}

let Mahindra = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-BE/6e/9263/1732689215786/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Mahindra", "#");

let Vayve  = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Vayve-Mobility/Eva/9679/1737214352028/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Vayve", "#");

let Hyundai = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Hyundai", "#");

let  Windsor   = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-664", "14 ", "16 ", "MG Windsor EV ", "#");




// upcoming Car
class UpcomingCars extends SearchedCars{}

let Kia = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Kia", "#");

let Audi  = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Audi", "#");

let Majestor = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Majestor", "#");


let Volvo = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-664", "1.05 ", "2.05 ", "Volvo", "#");



let allSearchedCars = [skoda, mahindra,bolero,Fortuner];
let allElectricCars = [Mahindra, Vayve, Hyundai,  Windsor ];
let allUpcomingCars = [Kia, Audi, Majestor,Volvo];

let searchcarsArea = document.getElementById('allsearchedCars');
let allElectricArea = document.getElementById('allElectricCars');
let allUpcomingArea = document.getElementById('allUpcomingCars');

allSearchedCars.forEach(car => {
    searchcarsArea.innerHTML +=`
        <div class='col-md-3'>
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
        <div class='col-md-3'>
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

allUpcomingCars.forEach(car => {
    allUpcomingArea.innerHTML +=`
        <div class='col-md-3'>
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
