let hotel = [
     {
          image:'http://maajagdambahotel.com/images/icon/Marriage-Hall-in-Bilaspur-Chhattisgrah.png',
          head:'Marriage  Party'
     },
     {
          image:'http://maajagdambahotel.com/images/icon/birthday-celebration-in_maa_jagdamba_hotel_palace_in_bilaspur.png',
          head:'Birthday Party',
     },
     {
          image:'http://maajagdambahotel.com/images/icon/kitty_party_in_maa_jagadamba_hotel_palace.png',
          head:'Kitty Party'
     },
     {
          image:'http://maajagdambahotel.com/images/icon/resturent_in_maa_jagdamba_hotel_bilaspur.png',
          head:'Restaurent'
     },
     {
          image:'http://maajagdambahotel.com/images/icon/conference_hall_in_maa_jagdamba_hotel_palace_i_bilaspur_chhatoshgarh.png',
          head:'Conference Hall'
     }
]
let welhotel = document.querySelector('#welhotel');
for(let i = 0; i < hotel.length; i++){
     welhotel.innerHTML +=`
          <div class="col-md-2">
               <div class="text-center">
                    <img src="${hotel[i].image}" alt="" width="60px" height="60px">
                    <p class="mt-2">${hotel[i].head}</p>
               </div>
          </div>
     `;
};

let avaibility = [
     {
          image:'<i class="fa-solid fa-wifi"></i>',
          head:'Wifi Internet',
     },
     {
          image:'<i class="fa-solid fa-utensils"></i>',
          head:'Restaurant',
     },
     {
          image:'<i class="fa-solid fa-jug-detergent"></i>',
          head:'Laundary',
     },
     {
          image:'<i class="fa-solid fa-square-parking"></i>',
          head:'Parking',
     },
     {
          image:'<i class="fa-solid fa-bell-concierge"></i>',
          head:'Room Service'
     },
     {
          image:'<i class="fa-solid fa-phone"></i>',
          head:'Telephone Service'
     },
     {
          image:'<i class="fa-solid fa-truck-pickup"></i>',
          head:'Pick Up & Drop',
     },
     {
          image:'<i class="fa-solid fa-shield"></i>',
          head:'24 Hour Security'
     },
]
     let facility = document.querySelector('#facility')
     for(let i = 0; i < avaibility.length; i++){
          facility.innerHTML +=`
               <div class="col-md-3">
                    <div class="text-center py-3">
                         <h1>${avaibility[i].image}</h1>
                         <p>${avaibility[i].head}</p>
                    </div>
               </div>
          `;
     };

     let likes = [
          {
               image:'http://maajagdambahotel.com//images/restaurent/chinese_food_in_hotel_jagdamaba_hotel.jpg',
               head:'Chinese Food'
          },
          {
               image:'http://maajagdambahotel.com//images/restaurent/masala-dosa-_south_indian_food_in_jagdamaba_palace.jpg',
               head:'South Indian Food'
          },
          {
               image:'http://maajagdambahotel.com//images/restaurent/chinese_food_in_hotel_jagdamaba_hotel.jpg',
               head:'Japanese Food'
          }
     ]

     let food = document.querySelector('#food')

     for(let i = 0; i < likes.length; i++){
          food.innerHTML +=`
               <div class="col-md-4">
                    <div class="position-relative ">
                         <img src="${likes[i].image}" alt="" class="w-100">
                         <div class="text-center position-absolute bottom-0 w-100" style="background-color:#0606063b">
                              <h3 class="p-2 text-light" >${likes[i].head}</h3>
                         </div>
                    </div>
               </div>
          `;
     }