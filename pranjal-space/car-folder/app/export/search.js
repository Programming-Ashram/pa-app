class SearchedCars{
    constructor(carImg, startPrice, endPrice, carName, carDtails){
        this.carImg = carImg;
        this.startPrice =startPrice;
        this.endPrice = endPrice;
        this.carName = carName;
        this.carDtails = carDtails;
    }
};
class ElectriCars extends SearchedCars{}
class UpcomingCars extends SearchedCars{}


export default SearchedCars;

