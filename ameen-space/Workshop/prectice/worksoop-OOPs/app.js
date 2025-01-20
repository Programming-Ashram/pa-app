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
        this.itemimage = itemImage,
    }
}

let pr1 = Products("Sugar", "45/kg", )
