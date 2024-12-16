let doremon = document.querySelector('#doremon');
let nobita = document.querySelector('#nobita');

nobita.style.display = "none";
doremon.style.display = "block";


function open(){
    nobita.style.display = "block";
    doremon.style.display = "none";
   
}
function close(){
    doremon.style.display = "none";
    nobita.style.display = "block";
}


