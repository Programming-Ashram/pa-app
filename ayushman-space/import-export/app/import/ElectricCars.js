import Car from "../export/car.js";


let Kia = new Car("Kia Syros", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh*", "https://www.cardekho.com/kia/syros", "Check Exciting Offers");

let Skoda = new Car("Skoda Kylaq", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh*", "https://www.cardekho.com/kia/syros", "I am Interested");


let Mahindra = new Car("Mahindra Scorpio N", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh*", "https://www.cardekho.com/kia/syros", "Check Exciting Offers");

let Fortuner = new Car("Toyota Fortuner", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh*", "https://www.cardekho.com/kia/syros", "Check Exciting Offers");


let allElectricCars = [Kia, Skoda, Mahindra, Fortuner];

let electricCarsArea = document.getElementById('electricCarsArea');

allElectricCars.forEach(car => {
    electricCarsArea.innerHTML +=`
        <div class='col-md-3'>
         <div class="card my-4" style="width: 18rem;">
            <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
            <div class="card-body">
                <h5 class="card-title">${car.carName}</h5>
                <p class="card-text">Rs ${car.startPrice} - ${car.endPrice}</p>
                <a href="${car.pageLink}" class="btn btn-outline-danger rounded-3 w-100">${car.linkName}</a>
            </div>
            </div>
        </div>
    `;
});

