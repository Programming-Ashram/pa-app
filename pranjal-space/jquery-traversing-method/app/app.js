$(docuument).ready(function(){
    $('span').parentsUntil('body').css({
        'background-color':'red'
    })
})