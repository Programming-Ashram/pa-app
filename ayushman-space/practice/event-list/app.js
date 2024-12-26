function clickme(x, y){
    console.log(x +" "+ y);
}

// let btn = document.getElementById('btn').addEventListener('click', function(){
    // alert("Hello  I am jeeshan");
// });

 btn.addEventListener('click', function(){
     console.log("Hello  I am jeeshan shaikh.");
 })

 let btn2 = document.getElementById('btn2')
 btn2.onclick = function(){
     console.log("Hello  I am update..");
 }

btn2.onclick = ()=>{
    console.log("Hello  I am Updated Two..");
}