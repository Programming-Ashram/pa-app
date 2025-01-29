class Cars{
    costructor(carName , carPrice){
        this.carName = carName;
        this.carPrice =carPrice;
    }
};

let car1 = new Cars("Mahindra Scorpio N", "Rs13.99 - 24.69 Lakh*");
let car2 = new Cars("Skoda KylaqSkoda Kylaq", "Rs7.89 - 14.40 Lakh*");
let car3 = new Cars("Mahindra Bolero", "Rs9.79 - 10.91 Lakh*");
let car4 = new Cars("Toyota Fortuner", "Rs33.43 - 51.94 Lakh*");

console.log(car1);


console.log(car1);
car1.forEach( car =>{
    console.log(car1.carPrice);
});