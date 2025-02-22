$(document).ready(function(){
   $('#btn').click(()=>{
       $('p').hide();
   })

   $('#show').click(()=>{
        $('p').show();
   })
    $('#onoff').click(()=>{
        $('p').toggle();
    })
})