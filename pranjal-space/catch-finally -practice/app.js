let fabric = [
    {
        fabricname: 'cotton',
        fabricprice: '200mtr',
        fabriccolor: 'brown',
    }
]
console.log(fabric)
class Fabric{
    constructor(fabricname, fabricprice , fabriccolor){
        this.fabricname = fabricname;
        this.fabricprice = fabricprice;
        this.fabriccolor = fabriccolor;
    }
}
let fabric1 = new fabric("shiffon","300mtr","black");

console.log (fabric1);
try{
    let fabricname = "Georget" ;
    if (fabricname === "Cotton"){
        console.log('this is  a Georget');
    }
    else{
        throw new Error("this is not a Cotton");
    }   
} catch (error) {
    console.log(error);
}finally{
    console.log("now we have Cotton")
}

