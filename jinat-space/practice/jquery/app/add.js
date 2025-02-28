$(document).ready(function(){
     // $('button').click(() =>{
     //      $('h4').addClass('bg-danger')
     // })
     $('button').click(() =>{
          $('h2').toggleClass('bg-primary')
     })
     $('#hide').click(()=>{
          $('#div1').remove()
     })
     $('span').parents('li').css(
          {"color": "red"}
     )
     $('h2').sibling().css(
          {'color':'green'}
     )
})