
class SearchedCars{
    constructor(carImg, startPrice, endPrice, carName, attribute){
        this.carImg = carImg;
        this.startPrice =startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.attribute = attribute;
    }
}


let skoda = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Skoda Kylaq", "https://www.cardekho.com/skoda/kylaq");

let mahindra = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Mahindra Scorpio N", "https://www.cardekho.com/kia/syros");

let bolero = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Mahindra Bolero", "https://www.cardekho.com/mahindra/scorpio-n");

let Fortuner = new SearchedCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "Rs.33.43 ", "51.94", "Fortuner", "https://www.cardekho.com/carmodels/Toyota/Toyota_Fortuner");



// New Car
class ElectriCars extends SearchedCars{}

let Mahindra = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-BE/6e/9263/1732689215786/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Mahindra", "https://www.cardekho.com/mahindra/be-6");

let Vayve  = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Vayve-Mobility/Eva/9679/1737214352028/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Vayve", "https://www.cardekho.com/vayve-mobility/eva");

let Hyundai = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Hyundai", "https://www.cardekho.com/hyundai/creta-electric");

let  Windsor   = new ElectriCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-664", "14 ", "16 ", "MG Windsor EV ", "https://www.cardekho.com/mg/windsor-ev");


// upcoming Car
class UpcomingCars extends SearchedCars{}

let Kia = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "7.89 ", "14.40", "Kia", "https://www.cardekho.com/audi/rs-q8-2025");

let Audi  = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Audi", "https://www.cardekho.com/mg/majestor");

let Majestor = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300", "13.99 ", "24.69 ", "Majestor", "https://www.cardekho.com/volvo/xc90-2025");


let Volvo = new UpcomingCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-664", "1.05 ", "2.05 ", "Volvo", "https://www.cardekho.com/mahindra/be-6");



let allSearchedCars = [skoda, mahindra,bolero,Fortuner];
let allElectricCars = [Mahindra, Vayve, Hyundai,  Windsor ];
let allUpcomingCars = [Kia, Audi, Majestor,Volvo];

let searchcarsArea = document.getElementById('allsearchedCars');
let allElectricArea = document.getElementById('allElectricCars');
let allUpcomingArea = document.getElementById('allUpcomingCars');

allSearchedCars.forEach(car => {
    searchcarsArea.innerHTML +=`
        <div class='col-md-3'>
            <div class='card rounded-4 border shadow'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="${car.attribute}" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});

allElectricCars.forEach(car => {
    allElectricArea.innerHTML +=`
        <div class='col-md-3'>
            <div class='card my-3 rounded-4 border shadow'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="${car.attribute}" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});

allUpcomingCars.forEach(car => {
    allUpcomingArea.innerHTML +=`
        <div class='col-md-3'>
            <div class='card my-3 rounded-4 border shadow'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="${car.attribute}" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});
