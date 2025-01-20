class Car{
    constructor(carName, carPrice, carImg){
        this.carName = carName;
        this.carPrice = carPrice;
        this.carImg = carImg;
    }
}

let car1 = new Car("BMW", "40,0000", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg");
let car2 = new Car("Audi", "40,0000", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg");
let car3 = new Car("Swift", "40,0000", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg/1200px-2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg");

let allcars = [car1,car2, car3];
let data = document.getElementById('data');

for(let i in allcars){
    data.innerHTML += `
        <div>  
            <img src='${allcars[i].carImg}'>+
            <h1>${allcars[i].carName}</h1>
            <h4>${allcars[i].carPrice}</h4>
        </div>
    `;
    console.log(allcars[i].carName + " " + allcars[i].carPrice);
}