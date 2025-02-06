import Header from '../export/header,js';


let Header = new Img("Kia Syros", "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Syros/11791/1734599341690/front-left-side-47.jpg?tr=w-300", "9", "17.80 Lakh*", "https://www.cardekho.com/kia/syros", "Check Exciting Offers");



let header = [logoImg, optionBar, searchBar,  languages, iconItem, registerLink];

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
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <img src="${header.logoImg}" class="card-img-top" alt="">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarScroll">
      <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Link</a>
        </li>
      </ul>
      <form class="d-flex" $>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
    </div>
  </div>
</nav>

