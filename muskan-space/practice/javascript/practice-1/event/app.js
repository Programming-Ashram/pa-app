let body = document.querySelector('body');


function callMuskan(){
    body.setAttribute('class', 'bg-primary');
}

function Muskan(){
    body.setAttribute('class', 'bg-danger');
}


let himanshu = document.querySelector('#himanshu');
let jeeshan = document.querySelector('#jeeshan');

himanshu.setAttribute('class','d-none');
jeeshan.setAttribute('class','d-none');

function himanshuShow(){
    himanshu.setAttribute('class', 'd-block');
    jeeshan.setAttribute('class','d-none');
}
function jeeshanShow(){
    jeeshan.setAttribute('class', 'd-block');
    himanshu.setAttribute('class','d-none');
}