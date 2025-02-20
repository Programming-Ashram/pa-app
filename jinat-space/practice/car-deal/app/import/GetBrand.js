import Brands from "../export/brands.js";

let Brand1 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg' , 'Maruti');

let Brand2 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg' , 'Tata');

let Brand3 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg' , 'Kia');

let Brand4 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/toyota.jpg' , 'Toyota');

let Brand5 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg' , 'Hyundai');

let Brand6 = new Brands('https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg' , 'Mahindra');

let popular = [Brand1 , Brand2 ,Brand3, Brand4 , Brand5 , Brand6];

let popularBrands = document.getElementById('popularBrands');

for(let i = 0 ; i < popular.length ; i++){
     popularBrands.innerHTML +=`
          <div class="col-md-2">
                         <div class="text-center card">
                              <img src="${popular[i].brandImg}" alt="">
                              <h3 >${popular[i].brandName}</h3>
                         </div>
                    </div>
     `
}