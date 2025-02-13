class vehicle{
    constructor(carImg, startPrice, endPrice, carName, carDetails){
        this.carImg = carImg;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDetails = carDetails;
    }
}

// vehicle
let search1 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Skoda Kylaq", "https://www.cardekho.com/kia/syros");
let search2 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Scorpio N", "https://www.cardekho.com/skoda/kylaq");
let search3 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Bolero", "https://www.cardekho.com/mahindra/scorpio-n");
let search4 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Toyota Fortuner", "https://www.cardekho.com/carmodels/Toyota/Toyota_Fortuner");

// ElectricCars

let electric1 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90", "Mahindra BE 6", "https://www.cardekho.com/mahindra/be-6");
let electric2 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90", "Hyundai Creta Electric", "https://www.cardekho.com/hyundai/creta-electric");
let electric3 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90", "MG Windsor EV", "https://www.cardekho.com/mg/windsor-ev");
let electric4 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Vayve-Mobility/Eva/9679/1737214352028/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90" , "Vayve Mobility Eva", "https://www.cardekho.com/vayve-mobility/eva");

// upcomingcars
let upcoming1 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Audi RS Q8 2025", "https://www.cardekho.com/audi/rs-q8-2025");
let upcoming2 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "MG Majestor", "https://www.cardekho.com/mg/majestor");
let upcoming3 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Volvo XC90 2025", "https://www.cardekho.com/volvo/xc90-2025");
let upcoming4 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q6-e-tron/11608/1710995400792/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Audi Q6 e-tron", "https://www.cardekho.com/audi/q6-e-tron");

// latestcars
let latest1 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Rolls-Royce/Ghost-Series-II/12399/1739005302678/front-left-side-47.jpg?tr=w-300", "8.95", "10.52", "Rolls-Royce Ghost II", "https://www.cardekho.com/audi/rs-q8-2025");
let latest2 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300", "18.90", "26.90", "Mahindra BE 6", "https://www.cardekho.com/mg/majestor");
let latest3 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg?tr=w-300", "21.90", "30.50", "Mahindra XEV 9e", "https://www.cardekho.com/volvo/xc90-2025");
let latest4 = new vehicle("https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "9", "17.80", "Kia Syros", "https://www.cardekho.com/audi/q6-e-tron");


let search = [search1, search2, search3, search4];
let electric = [electric1, electric2, electric3, electric4];
let upcoming = [upcoming1, upcoming2, upcoming3, upcoming4];
let latest = [latest1, latest2, latest3, latest4];

let searchArea = document.getElementById('search');
let electricArea = document.getElementById('electric');
let upcomingArea = document.getElementById('upcoming');
let latestArea = document.getElementById('latest');


for(let car of search){
    searchArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rounded-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body my-3">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} lakh* </p>
            <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}

for(let car of electric){
    electricArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rounded-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body my-3">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} lakh* </p>
            <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}

for(let car of upcoming){
    upcomingArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rounded-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
            <div class="card-body my-3">
                <h5 class="card-title">${car.carName}</h5>
                <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} lakh* </p>
                <a href="" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
            </div>
        </div>
    </div>
`;
}

for(let car of  latest){
    latestArea.innerHTML +=`
    <div class="col-md-3 col-6">
        <div class=" card rounded-3 shadow-sm border-0 w-100">  
            <img src="${car.carImg}" class="card-img-top" alt=""${car.carName}>
            <div class="card-body my-3"> 
                <h5 class="car-title">${car.carName}</h5>
                <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} lakh*</p>
                <a href="" class="btn btn-outline-danger small-text-btn rounded-3 w-100">Check January Offers</a>
            </div>
        </div>
    </div>
 `;
}


