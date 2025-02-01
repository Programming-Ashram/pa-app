class Showroom{
    constructor(carImg, carName, startPrice, endPrice, attribute){
        this.carImg = carImg;
        this.carName = carName;
        this.startPrice = startPrice;
        this.endPrice = endPrice;
        this.attribute = attribute;
    }
};

class Searchcars extends Showroom{}
class Upcomingcars extends Searchcars{}

export default Showroom;