class AllCars {
    constructor(carImg, startPrice, endPrice, carName, carDtails){
        this.carImg = carImg;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDtails = carDtails;
    }
}

let fortuner = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-300"," 33.78","51.94", "Fortuner","https://www.cardekho.com/carmodels/Toyota/Toyota_Fortuner");

let Creta = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-300","11.11","20.22","Hyundai Creta","https://www.cardekho.com/hyundai/creta");

let Thar = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar-ROXX/8438/1723692413550/front-left-side-47.jpg?tr=w-300","12.99","23.09","Mahindra Thar ROXX","https://www.cardekho.com/mahindra/thar-roxx");

let xuv700 = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/XUV700/10789/1705388477954/front-left-side-47.jpg?tr=w-300","13.99","25.74","Mahindra XUV700","https://www.cardekho.com/mahindra/xuv700");

let MarutiFRONX= new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1738296828682/front-left-side-47.jpg?tr=w-300"," 33.78","51.94", "Maruti FRONX","https://www.cardekho.com/carmodels/Toyota/Toyota_Fortuner");

let Bulero = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Bolero/10754/1697696929365/front-left-side-47.jpg?tr=w-300","9.79","10.91","Bulero","https://www.cardekho.com/mahindra/bolero");

let KiaSyros = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300","9","17.80","KiaSyros","https://www.cardekho.com/kia/syros");

let Skoda  = new AllCars("https://stimg.cardekho.com/images/carexteriorimages/630x420/Skoda/Kylaq/11528/1733225175669/front-left-side-47.jpg?tr=w-300","7.99","14.40","Skoda","https://www.cardekho.com/skoda/kylaq");

let morecar = [fortuner,Creta,Thar,xuv700,,Skoda,KiaSyros,Bulero,MarutiFRONX];
let Searchcars = document.getElementById('morecar');

morecar.forEach(car => {
    Searchcars.innerHTML +=`
        <div class='col-md-3'>
            <div class='card rounded-2 border shadow-sm'>
                <img src="${car.carImg}" alt="${car.carName}" class='card-img-top'>
                <div class="card-body">
                    <h5 class="card-title">${car.carName}</h5>
                    <p class="card-text">Rs ${car.startPrice} - ${car.endPrice} Lakh</p>
                    <a href="${car.carDtails}" class="btn btn-outline-danger rounded-3 w-100 btn-lg">Go somewhere</a>
                </div>
            </div>
        </div>
    `;
});