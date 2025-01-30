class SearchedCar{
    constructor(carImg, startPrice, endPrice, carName, carDetails){
        this.carImg = carImg;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDetails = carDetails;
    }
}

let skoda = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Skoda Kylaq", "#");
let Scorpio = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Scorpio-N/10817/1690351800434/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Scorpio N", "#");
let Bolero = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Mahindra Bolero", "#");
let Fortuner = new SearchedCar("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300", "7.89", "14.40", "Toyota Fortuner", "#");

let allsearchCar = [skoda, Scorpio, Bolero, Fortuner];

let allsearchedcarArea = document.getElementById('allsearchedcarArea');

// allsearchCar.forEach(car =>{
//     allsearchedcarArea.innerHTML +=`
//         <div class='col-md-3'>
//             <div class="card" style="width: 18rem;">
//             <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
//             <div class="card-body">
//                 <h5 class="card-title">${car.carName}</h5>
//                 <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh </p>
//                 <a href="#" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Check January Offers</a>
//             </div>
//             </div>
//         </div>
//     `;
// })


// for(let i = 0; i < allsearchCar.length; i++){
//     allsearchedcarArea.innerHTML +=`
//     <div class='col-md-3'>
//         <div class="card" style="width: 18rem;">
//         <img src="${allsearchCar[i].carImg}" class="card-img-top" alt="${allsearchCar[i].carName}">
//         <div class="card-body">
//             <h5 class="card-title">${allsearchCar[i].carName}</h5>
//             <p class="card-text">Rs ${allsearchCar[i].startPrice} - ${allsearchCar[i].endPrice} Lakh </p>
//             <a href="#" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Check January Offers</a>
//         </div>
//         </div>
//     </div>
// `;
// }


for(let car of allsearchCar){
    allsearchedcarArea.innerHTML +=`
    <div class='col-md-3 col-6'>
        <div class="card rouned-3 shadow-sm border-0 w-100">
        <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
        <div class="card-body">
            <h5 class="card-title">${car.carName}</h5>
            <p class="card-text small-text-btn">Rs ${car.startPrice} - ${car.endPrice} Lakh </p>
            <a href="#" class="btn btn-outline-danger small-text-btn  rounded-3 w-100 ">Check January Offers</a>
        </div>
        </div>
    </div>
`;
}