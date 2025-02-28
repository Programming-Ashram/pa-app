$(document).ready(function(){
     // $('#hide').click(() =>{
     //      $('#pic').hide()
     // }),
     // $('#show').click(() =>{
     //      $('#pic').show()
     // }),
     // $('#fade').click(() =>{
     //      $('#pic').fadeToggle()
     // })
     // $('#animate').click(()=>{
     //      $('#pic').animate({
     //           left:'250px'},'slow');
     // })
     $('#stop').click(() =>{
          $('#panel').stop()
     })
     $('#panel').click(() =>{
          $('#down').slideDown(3000)
     })
})