import Vehical from '../export/Vehical.js';

let searchedcar1 = new Vehical("https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "Kia Syros", "9", "17.80", "https://www.cardekho.com/kia/syros", "View All Offers");

let searchedcar2 = new Vehical("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "Kia Syros", "9", "17.80", "https://www.cardekho.com/kia/syros", "View All Offers");

let searchedcar3 = new Vehical("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "Kia Syros", "9", "17.80", "https://www.cardekho.com/kia/syros", "View All Offers");

let searchedcar4 = new Vehical("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "Kia Syros", "9", "17.80", "https://www.cardekho.com/kia/syros", "View All Offers");

let allSearchedCarsGroups = [searchedcar1, searchedcar2, searchedcar3, searchedcar4];

let allSearchedCars = document.getElementById('allSearchedCars');


allSearchedCarsGroups.forEach(car => {
    allSearchedCars.innerHTML +=`
        <div class='col-md-3'>
            <div class="card my-4">
                <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh*</p>
                    <a href="${car.carDetails}" class="btn rounded-3  btn-outline-danger w-100">${car.detailsLabel}</a>
                </div>
            </div>
        </div>
    `;
});