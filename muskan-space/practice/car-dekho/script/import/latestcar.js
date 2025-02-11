import Car from "../export/latestcar.js";


let ghost = new Car("Rolls-Royce Ghost Series II", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Rolls-Royce/Ghost-Series-II/12399/1738762718210/front-left-side-47.jpg?tr=w-300", "8.95", " 10.52 Cr*", "https://www.cardekho.com/kia/syros", "View Complete Offers");

let BE = new Car("Mahindra BE 6", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/BE-6/9263/1738382953778/front-left-side-47.jpg?tr=w-300", "Rs18.90", "26.90 Lakh*", "https://www.cardekho.com/kia/syros", "View Complete Offers");

let Mahindra = new Car("Mahindra XEV 9e", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra-XEV/9e/9262/1732688872801/front-left-side-47.jpg?tr=w-300", "21.90", "30.50 Lakh*", "https://www.cardekho.com/kia/syros", "View Complete Offers");

let kia = new Car("Kia Syros", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh**", "https://www.cardekho.com/kia/syros", "View Complete Offers");


let allSearchedCars = [ghost, BE, Mahindra, kia];

let alllatestcararea = document.getElementById('alllatestcararea');

allSearchedCars.forEach(car => {
    alllatestcararea.innerHTML +=`
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