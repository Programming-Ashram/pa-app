class Rose{
    constructor(RoseName,  RosePrice,  RoseImg){
        this.  RoseName =  RoseName;
        this. RosePrice =  RosePrice;
        this. RoseImg =  RoseImg;
    }
}

let  Rose1 = new  Rose("red" ,"300","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaXqpjCeaCvX1WRCQJwVInmgmbBZ5YRr4sw&s");
let  Rose2 = new  Rose("pink", "200","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv3zH-GM8R8FHrMxrjv8p1-G7ZE_iTNV7JDw&s");
let  Rose3 = new  Rose("yellow", "100","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTMGVV0j4fGqxYZZU_XzlMtx36KE-YT2yAg&s");

let allRose = [ Rose1,  Rose2, Rose3];
let data = document.getElementById('data');

for(let i in allRose){
    data.innerHTML += ` 
        <div>  
            <img src='${allRose[i]. RoseImg}'>+
            <h1>${allRose[i]. RoseName}</h1>
            <h4>${allRose[i]. RosePrice}</h4>
        </div>
    `;
    console.log(allRose[i]. RoseName + " " + allRose[i]. RosePrice)

}

class lily{
    constructor(lilyName,  lilyPrice,  lilyImg){
        this.  lilyName =  lilyName;
        this. lilyPrice =  lilyPrice;
        this. lilyImg =  lilyImg;
    }
}

let  lily1 = new  lily("red" ,"300","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa3CjtJH7plpD0eX1o9b3cuXtnWHLnwKdIbw&s");
let  lily2 = new  lily("pink", "200","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOMzhV8cAvWqjnaNr5o7frsN4RaekZihXlw&s");
let  lily3 = new  lily("yellow","100","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwaOl2jgLXOBCgRGiq32bAZc4c18cpAHIXA&s")
let alllily = [ lily1,  lily2, lily3];
let muskan = document.getElementById('muskan');
for(let i in alllily){
    data.innerHTML += ` 
        <div>  
            <img src='${alllily[i]. lilyImg}'>+
            <h1>${alllily[i]. lilyName}</h1>
            <h4>${alllily[i]. lilyPrice}</h4>
        </div>
    `;
    console.log(alllily[i]. lilyName + " " + alllily[i]. lilyPrice)

}

class lotus{
    constructor(lotusName,lotusPrice,lotusImg){
        this.lotusName = lotusName;
        this.lotusPrice = lotusPrice;
        this.lotusImg = lotusImg;
    }
}

let lotus1 = new  lotus("red","300","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UReDe3WRoQeRW8yiE4QlVovT3FYFY5oang&s")
let lotus2 = new  lotus("pink","200","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMU4zZBhIcG4IjLsO2BiNRwBjH0hsYXipcg&s")
let lotus3 = new  lotus("yellow","100","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJPBwpguaBRqEvY1xDbccf2dMXYIv6y8vkqg&s")
let alllotus = [lotus1,lotus2,lotus3];
let arpit = document.getElementById('arpit');
for( let i in alllotus){
    data.innerHTML +=`
            <div>
            <img src='${alllotus[i]. lotusImg}'>+
            <h1>${alllotus[i]. lotusName}</h1>
            <h4>${alllotus[i]. lotusPrice}</h4>
            </div>
    `;
    console.log(alllotus[i].lotus + "" + alllotus[i].lotusprice)
}




