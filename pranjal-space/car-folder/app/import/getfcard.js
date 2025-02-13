import  fcard from '../export/fcard.js';

var card01 = new fcard("<i class='fa-solid fa-award' style='font-size:40px'></i>","India","Largest Auto portal");
var card02 = new fcard("<i class='fa-solid fa-shuttle-van' style='font-size:40px'></i>","Car Sold","Every 4 minute");
var card03 = new fcard("<i class='fa-solid fa-tags' style='font-size:40px'></i>","Offers","Stay updated pay less");
var card04 = new fcard('<i class="fa-solid fa-automobile" style="font-size:40px"></i>',"Compare","Decode the right car")

var card_array = [card01,card02,card03,card04];

document.querySelector('.fcards').innerHTML+=`
	<div class="container">
	   <div class="row">
	   </div>
	</div>
`;

for(var i in card_array){
document.querySelector('.fcards>.container>.row').innerHTML+=`
	<div class="col-md-3">
	   <div class="card-img d-flex gap-3 my-2">
		  <div><span>${card_array[i].icon}</span></div>
		  <div>
			 <p class="name"><b>${card_array[i].name}</b></p>
			 <p class="text-secondary">${card_array[i].paragraph}</p>
		  </div>
	   </div>
	</div>
`;
}