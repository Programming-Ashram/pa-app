import Car from "../export/electriccar.js";


let mahindra = new Car("mahindra BE 6", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300", "18.90", "26.90Lakh*", "https://www.cardekho.com/kia/syros", "view complete offer");

let  Windsor= new Car("MG Windsor EV", "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Windsor-EV/11848/1726050481737/front-left-side-47.jpg?tr=w-300", "14", "16Lakh*", "https://www.cardekho.com/kia/syros", "view complete offer");

let Hyundai = new Car("Hyundai Creta Electric", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta-Electric/11523/1738068021618/front-left-side-47.jpg?tr=w-300", "17.99 ", "24.38 Lakh*", "https://www.cardekho.com/kia/syros", "view complete offer");

let XEV = new Car("Mahindra XEV 9e", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "21.90", " 30.50 Lakh*", "https://www.cardekho.com/kia/syros", "view complete offer");


let allSearchedCars = [mahindra, Windsor, Hyundai,  XEV ];

let allelectriccararea = document.getElementById('allelectriccararea');
allSearchedCars.forEach(car => {
    allelectriccararea.innerHTML +=`
        <div class='col-md-3'>
         <div class="card my-4" style="width: 19rem;">
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