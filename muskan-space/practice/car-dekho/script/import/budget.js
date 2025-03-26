import Car from "../export/budget.js";


let hyundai = new Car("Hyundai Grand i10", "https://stimg.cardekho.com/images/car-images/large/Hyundai/Grand-i10/7715/1585640597453/front-left-side-47.jpg?tr=w-300", "Starting @ Rs", " 1.78 Lakh");

let  Maruti = new Car("Maruti Wagon R", "https://stimg.cardekho.com/images/car-images/large/Maruti/Wagon-R/10365/1687580750512/front-left-side-47.jpg?tr=w-300", "Starting @ Rs", "1.00 Lakh",);

let Baleno = new Car("Maruti Baleno", "https://stimg.cardekho.com/images/carexteriorimages/large/Maruti/Maruti-Baleno-1999-2007/578/1561968965907/front-left-side-47.jpg?tr=w-300", "Starting @ R", "2.90 Lakh",);

let i20 = new Car("Hyundai i20","https://stimg.cardekho.com/images/carexteriorimages/large/Hyundai/i20/9471/1697696007962/front-left-side-47.jpg?tr=w-300", "Starting @ Rs", "1.00 Lakh",);

let allSearchedCars = [hyundai , Maruti, Baleno, i20 ];

let allbudgetcar= document.getElementById('allbudgetcar');
allSearchedCars.forEach(car => {
    allbudgetcar.innerHTML +=`
        <div class='col-md-3'>
         <div class="card my-4" style="width: 19rem;">
            <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
            <div class="card-body">
                <h5 class="card-title">${car.carName}</h5>
                <p class="card-text">Rs ${car.startPrice} - ${car.endPrice}</p>
            </div>
            </div>
        </div>
    `;
});