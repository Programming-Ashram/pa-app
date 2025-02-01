class shop{
    constructor(){
        this.shopname = "shine shop"
    }
};

class products extends shop{
    constructor(itemName, itemPrice, itemcategory, itemImage){
        super();
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemcategory = itemcategory,
        this.itemImage = itemImage
    }
}
let pr1 = new products("salt", "grocery","");
let pr2 = new products("Rice", "grocery","");
let pr3 = new products("Lentils", "grocery","");
let pr4 = new products("oil", "grocery","");


let allproducts =[pr1, pr2, pr3, pr4,];

// console.log(allproducts);

let productlist = document.getElementById('productlist');
let total = document.getElementById('total');

total.innerHTML = (allproducts.length < 10) ? "0" + allproducts.length : allproducts.length;

for(let i in allproducts){
    productlist.innerHTML += `
    
            <div class='col-md-3'>
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                             <h5 class="card-title">${allproducts[i].itemName}</h5>
                             <h6 class="card-subtle">${allproducts[i].itemcategory}</h6>
                             <p class="card-text">${allproducts[i].itemPrice}</p>
    
                        </div>
                </div>
            </div>
    `;
}