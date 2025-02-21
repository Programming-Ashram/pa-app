$(document).ready(function(){
    $('#hide').click(()=>{
        $('#box').hide();
    })
    $('#show').click(()=>{
        $('#box').fadeIn();
    })
    $('#slide').click(()=>{
        $('#box').slideToggle().css(
            {
            background:"blue",
            color:"white"
        }
    );
    })
    $('#animate').click(()=>{
        $('#box').animate({
            left:'250px',
            opacity:'0.5',
            height:'350px',
            width:'150px',
            padding:'10px'
        });
    })
})

    