import Car from "../export/upcommingcar.js";


let audi = new Car("Audi RS Q8 2025", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/RS-Q8-2025/12377/1738054937653/front-left-side-47.jpg?tr=w-300", "2.30 Cr", "https://www.cardekho.com/kia/syros", "Alert Me When Launched");

let  Majestor= new Car("MG Majestor", "https://stimg.cardekho.com/images/carexteriorimages/630x420/MG/Majestor/12370/1737206408710/front-left-side-47.jpg?tr=w-300", "46 Lakh",  "https://www.cardekho.com/kia/syros", "Alert Me When Launched");

let volvo = new Car("Volvo XC90 2025", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Volvo/XC90-2025/11977/1725537655549/front-left-side-47.jpg?tr=w-300", "s1.05 Cr",  "https://www.cardekho.com/kia/syros", "Alert Me When Launched");

let tron = new Car("Audi Q6 e-tron", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Audi/Q6-e-tron/11608/1710995400792/front-left-side-47.jpg?tr=w-300", "1 Cr", "https://www.cardekho.com/kia/syros", "Alert Me When Launched");


let allSearchedCars = [audi, Majestor, volvo,  tron ];

let allupcommingcararea = document.getElementById('allupcommingcararea');
allSearchedCars.forEach(car => {
    allupcommingcararea.innerHTML +=`
        <div class='col-md-3'>
         <div class="card my-4" style="width: 19rem;">
            <img src="${car.carImg}" class="card-img-top" alt="${car.carName}">
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice}</p>
                    <a href="${car.pageLink}" class="btn btn-outline-danger rounded-3 w-100">${car.linkName}</a>
                </div>
            </div>
        </div>
    `;
});