class SearchedCar{
    constructor(carImg, startPrice, endPrice, carName, carDetails){
        this.carImg = carImg;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDetails = carDetails;
    }
}

// SearchedCar
let skoda = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Skoda Kylaq", "https://www.cardekho.com/kia/syros");
let Scorpio = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Scorpio N", "https://www.cardekho.com/skoda/kylaq");
let Bolero = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Bolero", "https://www.cardekho.com/mahindra/scorpio-n");
let Fortuner = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Toyota Fortuner", "https://www.cardekho.com/carmodels/Toyota/Toyota_Fortuner");

// ElectricCars

let Mahindra = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90 Lakh*", "Mahindra BE 6", "https://www.cardekho.com/mahindra/be-6");
let Hyundai = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90 Lakh*", "Hyundai Creta Electric", "https://www.cardekho.com/hyundai/creta-electric");
let Windsor = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90 Lakh*", "MG Windsor EV", "https://www.cardekho.com/mg/windsor-ev");
let Vayve = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Vayve-Mobility/Eva/9679/1737214352028/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90 Lakh*", "Vayve Mobility Eva", "https://www.cardekho.com/vayve-mobility/eva");

// upcomingcars
let audi = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Audi RS Q8 2025", "https://www.cardekho.com/audi/rs-q8-2025");
let majestor = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "MG Majestor", "https://www.cardekho.com/mg/majestor");
let volvo = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Volvo XC90 2025", "https://www.cardekho.com/volvo/xc90-2025");
let etron = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q6-e-tron/11608/1710995400792/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Audi Q6 e-tron", "https://www.cardekho.com/audi/q6-e-tron");

// Latest Cars
let royce = new SearchedCar("https://www.cardekho.com/rolls-royce/ghost-series-ii", "Rs.8.95","10.52 Cr*","Rolls-Royce Ghost Series","https://www.cardekho.com/#leadForm");


let allsearchCar = [skoda, Scorpio, Bolero, Fortuner];
let allcomingCar = [audi, majestor, volvo, etron ];
let allelectricCar = [Mahindra, Hyundai, Windsor, Vayve];


let allsearchedcarArea = document.getElementById('allsearchedcarArea');
let allcomingCarArea = document.getElementById('allcomingCarArea');
let allelectricCarArea = document.getElementById('allelectricCarArea');

for(let car of allsearchCar){
    allsearchedcarArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rouned-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body my-3">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} Lakh </p>
            <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}

for(let car of allelectricCar){
    allelectricCarArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rouned-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body my-3">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} Lakh </p>
            <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}


for(let car of allcomingCar){
    allcomingCarArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rouned-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body my-3">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} Lakh </p>
            <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}

