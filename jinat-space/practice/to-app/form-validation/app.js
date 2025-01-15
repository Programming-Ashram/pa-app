let fname , mailme , num , fnameMessage ,btn , mailMessage , numMessage;
fname = document.getElementById('fname');
mailme = document.getElementById('mailme');
num = document.getElementById('num');
fnameMessage = document.getElementById('fnameMessage');
mailMessage = document.getElementById('mailMessage');
numMessage = document.getElementById('numMessage');
btn = document.getElementById('btn');

fname.addEventListener('input', ()=>{
     if(fname.value !==''){
          fnameMessage.classList.replace('text-danger','text-secondary');
          fnameMessage.innerText = 'Ex. User Name'
     }
     else{
          fnameMessage.classList.replace('text-secondary','text-danger');
          fnameMessage.innerText = 'Please enter the input'
     }
})
     mailme.addEventListener('input', ()=>{
          if(mailme.value !==''){
               mailMessage.classList.replace('text-danger','text-secondary');
               mailMessage.innerText = 'Ex. User@gmail.com '
          }
          else{
               mailMessage.classList.replace('text-secondary','text-danger');
               mailMessage.innerText = 'Please enter the input'
          }
     })
     
     num.addEventListener('input', ()=>{
          if(num.value !==''){
               numMessage.classList.replace('text-danger','text-secondary');
               numMessage.innerText = 'Ex. User@gmail.com '
          }
          else{
               numMessage.classList.replace('text-secondary','text-danger');
               numMessage.innerText = 'Please enter the input'
          }
     })
     btn.addEventListener('click', ()=>{
          if(fname.value !== '' && mailme.value !=='' && num.value !==''){
               alert('Successfully Added');
          }
          else{
               alert('All Field Are Mendetory');
          }
     })
