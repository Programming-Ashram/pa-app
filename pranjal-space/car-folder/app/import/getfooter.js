import Footer from "../export/footer.js";


var about01 = new Footer('About','https://www.cardekho.com/info/about_us');
var about02 = new Footer('Careers With Us','https://careers.cardekho.com/');
var about03 = new Footer('Terms & Conditions','https://www.cardekho.com/info/terms_and_condition');
var about04 = new Footer('Privacy Policy','https://www.cardekho.com/info/privacy_policy');
var about05 = new Footer('Corporate Policies','https://stimg.cardekho.com/policy/CSR-Policy-GSPL.pdf');
var about06 = new Footer('Investors','https://www.cardekho.com/investor');
var about07 = new Footer('FAQs','https://www.cardekho.com/info/FAQ');


var list01 = [about01,about02,about03,about04,about05, about06, about07 ];

var connect1 = new Footer('Feedback','https://www.cardekho.com/feedback');
var connect2 = new Footer('Contact Us','https://www.cardekho.com/info/contact_us');
var connect3 = new Footer('Advertise with Us','https://media.cardekho.com/');
var connect4 = new Footer('Become Partner Dealer','https://www.cardekho.com/usedcardealerinquiry');

var list02 = [connect1,connect2,connect3,connect4];

var other1 = new Footer('Trucks Dekho','https://trucks.cardekho.com/');
var other2 = new Footer('Tyre Dekho','https://tyres.cardekho.com/');
var other3 = new Footer('Tractors Dekho','https://www.tractorsdekho.com/');
var other4 = new Footer('Girnar Vision Fund','https://www.cardekho.com/girnar-vision-fund');
var other5 = new Footer('Emergency Response','https://www.cardekho.com/emergency-response');
var other6 = new Footer('Car Sales Trends','https://www.cardekho.com/automobile-industry-dashboard');

var list03 = [other1,other2,other3,other4, other5, other6];

document.querySelector('footer').innerHTML+=`
		<div class="container">
		   <div class="row">
			  <div class="col-md-3">
				 <div class="list01 ">
					<p>About CarDekho</p>
					<ul class="navbar-nav"></ul>
				 </div>
			  </div> 
			  <div class="col-md-3">
				 <div class="list02">
					<p>Connect With Us</p>
					<ul class="navbar-nav"></ul>
				 </div>
			  </div>
			  <div class="col-md-3">
				 <div class="list03 text-decoration-none">
					<p>OTHERS</p>
					<ul class="navbar-nav text-decoration-none"></ul>
				 </div>
			  </div>
			  <div class="col-md-3">
				 <div class="list04">
					<p>EXPERIENCE CARDEKHO APP</p>
					<div class="col-md-6 d-flex gap-3 my-3 ">
					    <img src="https://stimg.cardekho.com/pwa/img/appstore.png" alt="https://apps.apple.com/us/app/cardekho/id903373747?referrer=click%3Dd561e499-d27d-45e4-997b-97c244c329de" class="img-responsive">

					   <img src="https://stimg.cardekho.com/pwa/img/playstore.png" alt="https://play.google.com/store/apps/details?id=com.girnarsoft.cardekho&&referrer=utm_campaign%3DWebsite%252520Head%252520Tab%252520for%252520App%252520Download%252520%26utm_medium%3Dad-analytics%26utm_content%3D328a755e-ae73-4c1c-ad53-eb47d19f9666%26utm_source%3Dflurry" class="img-responsive">
					</div>
					<div">
					   <p>CarDekho Group Ventures</p>
					   <div>
					   		<div class="d-flex gap-2 my-3 ">
								<img src="https://stimg.cardekho.com/pwa/img/footer-BdLogo.svg" alt="https://www.bikedekho.com/"class="img-responsive">
								<img src="https://stimg.cardekho.com/pwa/img/footer-rupyyLogo.svg" alt="https://www.rupyy.com/?utm_source=cardekho&utm_medium=footer&utm_campaign=group_ventures" class="img-responsive">
							</div>
							<div class="d-flex gap-2 my-3">
								<img src="https://stimg.cardekho.com/pwa/img/footer-zwLogo.svg" alt="https://www.zigwheels.com/" class="img-responsive">
								<img src="https://stimg.cardekho.com/pwa/img/footer-IdLogo.svg" alt="https://www.insurancedekho.com/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer" class="img-responsive">
							</div>
							<div class="gap-2 my-3">
								<img src="https://stimg.cardekho.com/pwa/img/Revv_Logo.svg" alt="https://www.revv.co.in/?utm_source=cardekho&utm_medium=internal&utm_campaign=Footer" class="img-responsive">
							</div>
					   </div>
					</div>
				 </div>
			  </div>
		   </div>
		   <hr>
		   <div class="col-md-12 d-flex my-3 ">
			  <div>
				 <ul class="navbar-nav p-10">
					<li><a href="#" class="text-secondary text-decoration-none my-3">© 2021 Girnar Software Pvt. Ltd.</a></li>
				 </ul>
			  </div>
			  <div class="d-flex justify-content-end" >
			  	<p>Connect:</p>
				<div class=" d-flex gap-3">
					<ul class="navbar-nav text-decoration-none my-3 p-10">
						<li><a href="#" class=" text-decoration-none"><i class="fa-brands fa-facebook-f"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
						<li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
				 	</ul>
				</div>
			  </div>
		   </div>
		</div>
`;
for(var i in list01){
	document.querySelector('.list01>ul').innerHTML+=`
	     <li><a href="${list01[i].mlink}">${list01[i].mname}</a></li>
	`;
}
for(var i in list02){
	document.querySelector('.list02>ul').innerHTML+=`
	     <li><a href="${list02[i].mlink}">${list02[i].mname}</a></li>
	`;
}
for(var i in list03){
	document.querySelector('.list03>ul').innerHTML+=`
	     <li><a href="${list02[i].mlink}">${list02[i].mname}</a></li>
	`;
}