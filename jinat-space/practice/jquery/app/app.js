$(document).ready(function(){
     $('#hide').click(() =>{
          $('#box').hide();
     });
     $('#show').click(() =>{
          $('#box').fadeIn();
     });
     $('#hide').click(() =>{
          $('#box').hide();
     });
     $('#animate').click(() =>{
          $('#box').animate({
               left:'200px',
               opacity:'0.5',
               height:'350px',
               width:'150px',
               
          })
     });
     $('#design').click(() =>{
          $('#box').slideToggle().css(
               'background-color','red'
          )
     })
});


let heading = document.querySelector('#Name');


// heading.children[1].classList.add('text-primary');
console.log(heading.classList.add('text-primary'));
// heading.children[1].id = 'subHeading';

let subHeading = document.querySelector('#subHeading');
console.log(subHeading.classList.add('bg-primary'));
// subHeading.classList.add('bg-primary-subtle');
console.log(heading.lastElementChild.innerText);
