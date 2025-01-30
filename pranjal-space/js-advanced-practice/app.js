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
