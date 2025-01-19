class Shop{
    constructor(){
        this.shopname = "shine-shop";
    }
};

class Products extends Shop{
    constructor(itemName, itemPrice, itemCategory, itemImage){
        super();
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemCategory = itemCategory,
        this.itemImage = itemImage
    }
}

let pr1 = new Products("Sugar", "45/kg", "Grocery","");
let pr2 = new Products("Rice", "80/kg", "Grocery","");
let pr3 = new Products("Flour", "50/kg", "powder","");
let pr4 = new Products("Oil", "130/kg", "liquid","");

// console.log(pr1);

// Group of all constructor property
let allProducts = [pr1, pr2, pr3, pr4];
console.log(allProducts);

// Total Products
let productList = document.getElementById('productList');
let total = document.getElementById('total');
let inputSearch= document.getElementById('searchbar')

for(let i in allProducts){
    productList.innerHTML +=`
            <div class="col-md-3">
                <div class="card" style="width: 18rem;">
                    <img src="./images/${allProducts[i].itemImage}" class="card-img-top"> 
                    <div class="card-body">
                        <h5 class="card-title">${allProducts[i].itemName}</h5>
                        <h6 class="card-subtitle">${allProducts[i].itemCategory}</h6>
                        <p class="card-text">${allProducts[i].itemPrice}</p>
                        
                    </div>
                </div>
            </div>

    `
}

inputSearch.addEventListener('input',function(){
    let searchValue = this.value.toLowerCase();
    let allitems = document.querySelectorAll('.item');

    allitems.forEach(i =>{
        const text = i.textContent.toLowerCase();
        if(text.includes(searchValue)){
            i.classList.remove('d-block');
        }
        else{
            i.classList.add(d-none)
        }
        
    });
})