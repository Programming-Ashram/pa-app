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
               width:'150px'
          })
     });
     $('#design').click(() =>{
          $('#box').slideToggle().css(
               'background-color','red'
          )
     })
});
