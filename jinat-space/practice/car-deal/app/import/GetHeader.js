import Header from "../export/head/Header.js";

let setHeader = new Header();

setHeader.setLogo("https://stimg.cardekho.com/pwa/img/carDekho-newLogo.svg");

setHeader.setRegister("https://www.cardekho.com/#myaccount");


let headerArea = document.getElementById('headerArea');

headerArea.innerHTML =`
    <div class='col-md-4'>
        <div class='logo'>
            <img src="${setHeader.getLogo()}">
        </div>
    </div>
    <div class='col-md-4 '>
        <div class='logo text-end '>
            <div class="input-group mb-3  ">
                <button class="btn btn-outline-secondary " type="button">Button</button>
                <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="logo text-end">
            <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Login/Register</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
    <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
            <div class='container-fluid'>
                <div class='row'>
                    <div class="col-md-4">
                <img src="https://stimg.cardekho.com/pwa/img/my-account/pic/login-banner-new.svg" class='w-100'>
        </div>
         <div class="col-md-8">
                <div class="text-start">
                    <h3>Login or Register</h3>
                    <p>for Better Experience, Order tracking & Regular updates</p>
                    <input type="text" placeholder="Enter Mobile Number" class="form-control">
                </div>
                </div>
            </div>
        </div>
      </div>  
    </div>
      
 </div>
</div>
`;

