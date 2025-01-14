let fname, email, inputnum, fnameMessage, emailMessage,numMessage, btn;

fname = document.getElementById('fname');
email = document.getElementById('email');
inputnum = document.getElementById('inputnum');
btn = document.getElementById('btn');
fnameMessage = document.getElementById('fnameMessage');
emailMessage = document.getElementById('emailMessage');
numMessage = document.getElementById('numMessage');


function formValid(){
    if (fname.value !== '') {
        fnameMessage.classList.replace('text-danger', 'text-secondary');
        fnameMessage.innerText = 'Ex. User Name';
    }
    else{
        fnameMessage.classList.replace('text-secondary', 'text-danger');
        fnameMessage.innerText = 'Please fill the input field';
    }
}

function formValidEmail(){
    if (email.value !== '') {
        emailMessage.classList.replace('text-danger', 'text-secondary');
        emailMessage.innerText = 'Ex. User Name';
    }
    else{
        emailMessage.classList.replace('text-secondary', 'text-danger');
        emailMessage.innerText = 'Please fill the input field';
    }
}

function formValidNum(){
    if (inputnum.value !== '') {
        numMessage.classList.replace('text-danger', 'text-secondary');
        numMessage.innerText = 'Ex. User Name';
    }
    else{
        numMessage.classList.replace('text-secondary', 'text-danger');
        numMessage.innerText = 'Please fill the input field';
    }
}


btn.addEventListener('click', ()=>{
    if (fname.value !== '' && email.value !== '' && inputnum.value !== '') {
        alert("Successfully Send");
    }
    else{
        alert("All Feilds are mendetory");
    }
})