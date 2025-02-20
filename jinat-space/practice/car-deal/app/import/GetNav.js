import Navigation from '../export/Nav.js';

let newCars = new Navigation("NEW CARS ", "index.html");
let usedCars = new Navigation("USED CARS ", "https://www.cardekho.com/usedCarsl");
let news = new Navigation("NEWS & REVIEWS ", "https://www.cardekho.com/india-car-news.htm");
let videos = new Navigation('VIDEOS', "https://www.cardekho.com/car-videos.htm");

let allMenusGroup = [newCars, usedCars, news, videos];

let allMenus = document.getElementById('allMenus');

allMenusGroup.forEach(menu  => {
    allMenus.innerHTML +=`
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${menu.link}">${menu.label}</a>
        </li>
    `;
});