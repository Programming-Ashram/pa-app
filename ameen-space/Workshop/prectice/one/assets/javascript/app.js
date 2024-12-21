let modallogin,modelsignup,loginbtn,signupbtn,logininputemail,logininputpass,signupinputemail,
signupinputpass,formsingupbtn,formloginbtn,modalsignupClose,modalLoginClose;

//our Modals
modallogin = document.getElementById('loginModal');
modalsignup = document.getElementById('signupModal');

// Main Buttons
    loginbtn = document.getElementById('loginbtn');
    signupbtn = document.getElementById('signupbtn');

//Form Login
logininputemail = document.getElementById('logininputemail');
logininputpass = document.getElementById('logininputpass');

//Form singup
signupinputemail = document.getElementById('signupinputemail');
signupinputpass = document.getElementById('signupinputpass');

// Form singup and submit
  formloginbtn = document.getElementById('submitLogin');
  formsignupbtn = document.getElementById('submitSignup');

  //Modal Close
  modalsignupClose = document.getElementById('modalsignupClose');
  modalloginClose = document.getElementById('modalLoginCloce');

 //open login modal
  function openLoginModal(){
    if(modallogin.style.display === "none"){
        modallogin.style.display = "block";
    }else{
        modallogin.style.display = "none"
    }
  }
    // Open Signup Modal
  function openSignupModal(){
    if(modalsignup.style.display === "none"){
        modalsignup.style.display = "block";
    }else{
        modalsignup.style.display = "none"
    }
  }

  function closeLoginModal(){
    if(modalsignup.style.display === "block"){
      modalsignup.style.display = "none";
    }else{
      modalsignup.style.display = "";
    }
    }
