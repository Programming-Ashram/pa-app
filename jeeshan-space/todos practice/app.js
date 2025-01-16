let head = document.getElementById('heading');
let btn = document.getElementById('btn');
let btnRemove = document.getElementById('btnRemove');
btn.addEventListener('click',()=>{
    head.classList.add('active');
})

btnRemove.addEventListener('click',()=>{
    head.classList.remove('active');
})