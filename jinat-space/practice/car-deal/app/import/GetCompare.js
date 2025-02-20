import CarComapare from "../export/compare.js";

let car1 = new CarComapare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hyryder/10910/1690544495925/front-left-side-47.jpg?tr=w-200' , 'Toyota Hyryder', 'Rs.11.14 - 19.99 Lakh *', "link", "Compare Now");

let car2 = new CarComapare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hyryder/10910/1690544495925/front-left-side-47.jpg?tr=w-200' , 'Toyota Hyryder', 'Rs.11.14 - 19.99 Lakh *', "link", "Compare Now");

let car3 = new CarComapare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hyryder/10910/1690544495925/front-left-side-47.jpg?tr=w-200' , 'Toyota Hyryder', 'Rs.11.14 - 19.99 Lakh *', "link", "Compare Now");



let car = [car1 , car2 , car3 ];

let compareArea = document.getElementById('compareArea');

for(let i = 0; i < car.length; i++){
     compareArea.innerHTML +=`
     <div class="col-md-4">
          <div class="card my-3 position-relative shadow">
               <div class="d-flex">
                         <div class='w-100'>
                              <img src="${car[i].carImage}" class="card-img-top w-100 rounded-0" alt="...">
                              <div class="card-body">
                                   <h5 class="card-title">${car[i].carName}</h5>
                                   <p class="card-text">${car[i].carPrice}</p>
                              </div>
                         </div>
                         <div class='w-100'>
                                   <img src="${car[i].carImage}" class="card-img-top rounded-0" alt="...">
                         <div class="card-body">
                         <h5 class="card-title">${car[i].carName}</h5>
                         <p class="card-text">${car[i].carPrice}</p>
                         </div>
                                   
                         
                         </div>
  
                         </div>
                         <a href="#" class="btn btn-outline-danger w-75 m-auto mb-2">Go somewhere</a>

                          <div class="position-absolute abs-2">
                         <div class="">
                              <h4 class="text-light bg-dark rounded-circle p-1">VS</h4>
                         </div>
                    </div>
                    </div>

                   
                    
`
}
