class Vehical{
     constructor(carImage , carName , carPrice , clickButton){
          this.carImage = carImage;
          this.carName = carName;
          this.carPrice = carPrice;
          this.clickButton = clickButton;
     }
}

class Electric extends Vehical{};
class Upcoming extends Electric{};
class Latest extends Upcoming{};
class Pops extends Latest{};
class Better extends Pops{};


export default Vehical;