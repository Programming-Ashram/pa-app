class Shop{
    constructor(){
        this.shopname = "KHAN TRADES"
    }
};
class Products extends Shop {
    constructor(itemName,itemPrice,itemCategory,itemImage){
        super();
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemCaregory = itemCategory,
        this.itemImage = itemImage
    }
}

let pr1 = new Products("suger","45/kg","Grocery","Screenshot 2025-01-18 082529.png");
let pr2 = new Products("rice","80/kg","Grocery","Screenshot 2025-01-18 082529.png");
let pr3 = new Products("flour","50/kg","powder","Screenshot 2025-01-18 082345.png");
let pr4 = new Products("oil","130/kg","liquid","Screenshot 2025-01-18 082214.png");
let allProducts = [pr1,pr2,pr3,pr4];
console.log(allProducts);
let Productlist = document.getElementById('productslist');
let total = document.getElementById('total');
inputSearch = document.getElementById('searchbar');

total.innerHTML = (allProducts.length < 10) ? "0" + allProducts.length : allProducts.length;


for (let i in allProducts){
    Productlist.innerHTML += `
        <div class="card item" style="width: 18rem;">
            <img src="./assets/${allProducts[i].itemImage}" class="card-img-top" alt="...">
                 <div class="card-body">
                         <h5 class="card-title">${allProducts[i].itemName}</h5>
                         <h6 class="card-title">${allProducts[i].itemCaregory}</h6>
                         <p class="${allProducts[i].itemPrice}"</p>
   
  </div>
</div>`;
}
inputSearch.addEventListener('input', function(){
    let searchValue = this.value.toLowerCase();
    let allitems = document.querySelectorAll('.item');

    allitems.forEach(i => {
        const text = i.textContent.toLowerCase();
        if(text.includes(searchValue)){
            i.classList.remove('d-block');
        }
        else{
            i.classList.add('d-none');
        }
    })
})

