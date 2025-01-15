let btn = document.getElementById('btn');
let name = document.getElementById('name');
let list = document.getElementById('list');
let alertWarn = document.getElementById('alert-Warn');
let alertDelete = document.getElementById('alert-delete');

btn.addEventListener('click',()=>{
     let array = [];

     if(name.value !==''){
          array.push(name.value);
     }
     else{
          alertWarn.style.display = 'block' ;
          setTimeout (() => {
               if(alertWarn){
                    alertWarn.style.display = 'none'
               }
               else{
                    alertWarn.style.display = ''
               }
          }, 3000);
     }
     array.forEach(i =>{
          let alert = document.getElementById('alert');
          alert.style.display = 'block';

          setTimeout(() =>{
               if(alert){
                    alert.style.display = 'none';
               }
               else{
                    alert.style.display = '';
               }
          }, 3000);

          list.innerHTML +=`
               <li class='mt-3'><span class='content'>${i}</span><button class='btn btn-danger btn-sm ms-2 delete'>Delete</button>
          `;

          let contentText = document.querySelectorAll('.content');
          for(let i = 0; i < contentText.length; i++){
               contentText[i].addEventListener('dblclick', ()=>{
                    contentText[i].contentEditable = true;
               })
          }

          let deletebtn = document.querySelectorAll('.delete');
          for(let i = 0; i < deletebtn.length; i++){
               deletebtn[i].addEventListener('click', ()=>{
                    alertDelete.style.display = 'block';
                    setTimeout(() =>{
                         if(alertDelete){
                              alertDelete.style.display = 'none';
                         }
                         else{
                              alertDelete.style.display = '';
                         }
                    }, 3000);
                    deletebtn[i].parentElement.style.display = 'none'
               }) 
          }
     })

})

     
    
