class vehicle{
    constructor(carImg, startPrice, endPrice, carName, carDtails){
        this.carImg = carImg;
        this.startPrice =startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDtails = carDtails;
    }
};
class search extends vehicle{}
class electric extends search{}
class upcoming extends electric{}



export default vehicle;

