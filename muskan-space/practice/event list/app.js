let btn = document.getElementById('btn').addEventListener('click', function(){
    alert("Hello everyone");
});

btn.addEventListener('click', function(){
    alert("hello");
 })

let btn2 = document.getElementById('btn2');

btn2.onclick = function(){
   alert("pranjal");
 }

btn2.onclick = ()=>{
    alert("jeeshan");
 }

function clickme(x, y){
    console.log(x +" "+ y);
}