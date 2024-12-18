let modallogin, modalsignup;

modallogin = document.getElementById('loginmodal');
modalsignup = document.getElementById('signupmodal');


function openloginModal(){
    if(modallogin.style.display === 'none'){
        modallogin.style.display = "block";
    }else{
        modallogin.style.display = 'none';
    }
}

function opensignupModal(){
    if(modalsignup.style.display === 'none'){
        modalsignup.style.display = "block";
    }else{
        modalsignup.style.display = 'none';
    }
}


function closeloginmodal(){
    if(modallogin.style.display === 'block'){
        modallogin.style.display = "none";
    }else{
        modallogin.style.display = '';
    }
}

function closesignupmodal(){
    if(modalsignup.style.display === 'block'){
        modalsignup.style.display = "none";
    }else{
        modalsignup.style.display = '';
    }
}