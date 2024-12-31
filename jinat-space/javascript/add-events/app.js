let btn1 = document.getElementById('btn1');

function clickme(){
     console.log('hello1')
} 

let btn2 = document.getElementById('btn2');

btn2.addEventListener('click',function(){
     console.log('hello2')
}) 

let btn3 = document.getElementById('btn3').addEventListener('click',function(){
     console.log('hello3')
})

let btn4 = document.getElementById('btn4').addEventListener('click', () =>{
     console.log('Hello Jinat')
})