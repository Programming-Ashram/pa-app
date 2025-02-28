$(document).ready(function(){
    // $('span').parentsUntil('body').css({
    //     'background-color': 'red'
    // })
    // $('.parent').find('span').css(
    //     {
    //         'background-color':'green',
    //     }
    // )
    // $('.mega-child-parent h1').nextUntil('h4').css(
    //     {
    //         'background-color':'green',
    //     }
    // )
    var buttonText = "Dynamic Button With Var"
    $('button').append(buttonText);
    $('button').click(function(){
      
        $('h3').filter('.head').toggleClass('active')
    })

})