class Shop{
    constructor(){
        this.shopname = "Shine Shop"

    }
};
class Products extends Shop{
    constructor(itemName, itemPrice,itemCategory,itemImage){
        super();
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemcategory = itemCategory,
        this.itemimage = itemImage
    }
}

let pr1 = new Products("Sugar", "45/kg", "Grocery", "" );
let pr2 = new Products("rice", "45/kg", "Grocery", "" );
let pr3 = new Products("maggi", "45/kg", "Grocery", "" );
let pr4 = new Products("milk", "45/kg", "Grocery", "" );

let allproducts = [pr1, pr2, pr3, pr4];
// console.log(allproducts)

let ProductList = document.getElementById('ProductList');
let total = document.getElementById('total');
let inputSearch = document.getElementById('searchbar');


for(let i in allproducts){
    ProductList.innerHtml += `
    <div class="col-md-3">
        <div class="card" style="width: 18rem;">
     <img src="..." class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">${allproducts[i].iteamName}</h5>
      <h6 class="card-subtitle">${allproducts[i].iteamCategory}</h6>
        <p class="card-text">${allproducts[i].iteamPrice}</p>
     </div>
     </div>
    </div>
    `
}