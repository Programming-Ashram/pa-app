
let muskan = document .getElementById(muskan) 
let btn =document .getElementById(btn)
let btnremove = document.getElementById(btnremove)
btn.addEventListener('click',()=>{
    head . classlist.add('active');
})
btnremove.addEventListener('click',()=>{
    head.classlist.remove('active');
})
