// jquery-callback example.js
// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });

$(document).ready(function(){
    $("img").click(function(){
      $(this).hide();
    });
    $("h1").click(function(){
      $(this).hide();
    });

    $('#toggle').click(()=>{
      $('#toggle-img').slideToggle().css({
              bacground:"blue",
              color:"white"
      });
  })
  $('#toggle').click(()=>{
      $('#toggle-img').animate({
          height:'300px',
          width:'300px',
          opacity:'0.5',
          left:'300px',
          padding:'10px'
      });
  })
});


  