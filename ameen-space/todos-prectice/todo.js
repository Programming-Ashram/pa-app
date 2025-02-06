let head = document.getElementById('heading');
let yup = document.getElementById('heading');
let btn = document.getElementById('btn');
let vaasu = document.getElementById('vaasu');
let btnRemove = document.getElementById('btnRemove');
btn.addEventListener('click', ()=>{
    head.classList.add('active');
})
vaasu.addEventListener('click', ()=>{
    yup.classList.add('active');
});
btnRemove.addEventListener('click', ()=>{
 head.classList.remove('active');
})
vaasuRemove.addEventListener('click', ()=>{
    yup.classList.remove('active');
})
