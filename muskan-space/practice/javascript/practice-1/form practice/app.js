let login  = document.querySelector('login form');
let  sign= document.querySelector('#sign in form');

login .setAttribute('class','d-none');
sign.setAttribute('class','d-none');

function loginbutton(){
    login.setAttribute('class', 'd-block');
    sign.setAttribute('class','d-none');
}
function signinbutton(){
    login.setAttribute('class', 'd-block');
    sign.setAttribute('class','d-none');
}