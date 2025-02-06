import Header from "../export/Header.js";

let setHeader = new Header();

setHeader.setLogo("Website Logo");
setHeader.setAddress("India");


let headerArea = document.getElementById('headerArea');

headerArea.innerHTML =`
    <div class='col-md-6'>
        <div class='logo'>
            <h4>${setHeader.getLogo()}</h4>
        </div>
    </div>
    <div class='col-md-6'>
        <div class='logo text-end'>
            <h4>${setHeader.getAddress()}</h4>
        </div>
    </div>
`;

console.log(setHeader.getAddress());