import Card from "../export/carstories.js";


let mahindra = new Car();

let  Windsor= new Car();

let Hyundai = new Card();

let XEV = new Car();

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