class Header{
    constructor(){
        let logo;
    }

    getLogo(){
        return this.logo;
    }
    setLogo(logo){
        this.logo = logo;
    }
}

let webHeader = new Header();

webHeader.setLogo("Pranjal Website");

console.log();
let logoArea = document.getElementById('logoArea');

logoArea.innerHTML = webHeader.getLogo();


class Navigation{
    constructor(label, link){
        this.label = label;
        this.link = link;
    }
}

let newCars = new Navigation('New Cars', 'index.html');
let usedCars = new Navigation('Used Cars', 'index.html');
let Videos = new Navigation('Videos', 'index.html');


let allMenus = [newCars, usedCars, Videos];

let menuList = document.getElementById('menuList');

allMenus.forEach(menu => {
    menuList.innerHTML +=`
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="${menu.link}">${menu.label}</a>
        </li>
    `;
});


// document.body.classList.add('bg-primary');