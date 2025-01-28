// class car{
//      constructor(carName, carPrice, carColor ){
//           this.carName = carName;
//           this.carPrice = carPrice;
//           this.carColor = carColor;
//      }
//      updateColor = (newColor)=>{
//           this.carColor = newColor;
//           }
// }
    

// let car1 = new car('Audi', '300000','black');
// car1.updateColor('blue')

// console.log(car1);


class user {
     constructor(fName){
          this.fName = fName;
     }
     updateName = (newName) =>{
          this.fName = newName;
     }
}
let btn = document.getElementById('btn');
let list = document.getElementById('list')
let name = document.getElementById('name');
let array = name.value;

btn.addEventListene