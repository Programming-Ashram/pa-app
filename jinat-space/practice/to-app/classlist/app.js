let title = document.getElementById('title');
let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
     title.classList.add('active');
});
let btnRemove = document.getElementById('btnRemove');
btnRemove.addEventListener('click', ()=>{
     title.classList.remove('active');
});