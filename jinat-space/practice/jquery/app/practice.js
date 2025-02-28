$(document).ready(function(){
     $('#hide').click(() =>{
          $('#data').hide()
     });
     // $('#show').click(() =>{
     //      $('#data').show()
     // });
     $('#show').click(() =>{
          $('#data').fadeIn()
     });
     $('#flip').click(() =>{
          $('#data').slideDown(5000)
     })
     $('#stop').click(() =>{
          $('#data').stop()
     })
     $('#animate').click(() =>{
          $('#data').animate({
               left:'200px',
               opacity:'1.5',
               height:'350px',
               width:'150px'
          })
     })
     $('#back').click(() =>{
          $('#call').hide('slow',function(){
               alert('hello')
          })
     })
     $('#chain').click(() =>{
          $('#call').css('color','red').slideUp(2000).slideDown(2000)
     })
})