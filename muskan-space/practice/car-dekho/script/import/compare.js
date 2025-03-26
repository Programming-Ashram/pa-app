import Compare from '../export/compare.js';

var car01 = new  Compare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Hyryder/10910/1690544495925/front-left-side-47.jpg?tr=w-200','https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Grand-Vitara/10505/1689588262879/front-left-side-47.jpg?tr=w-200','Hyryder','Grand Vitara','Rs.11.14 - 19.99 Lakh *','Rs.11.19 - 20.09 Lakh *','Hyryder vs Grand Vitara','compare1');
var car02 = new Compare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Rumion/8650/1715234883897/front-left-side-47.jpg?tr=w-200','https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg?tr=w-200','Rumion','Ertiga','Rs.10.44 - 13.83 Lakh *','Rs.8.84 - 13.13 Lakh *','Rumion vs Ertiga','');

var car03 = new Compare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/8667/1705465218824/front-left-side-47.jpg?tr=w-200','https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-200','Creta','Seltos','Rs.11.11 - 20.42 Lakh ','Rs.11.13 - 20.51 Lakh *','Creta vs Seltos','');

var car04 = new Compare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/FRONX/9243/1738296828682/front-left-side-47.jpg?tr=w-200','https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Urban-Cruiser-Taisor/11639/1712131241368/front-left-side-47.jpg?tr=w-200','FRONX','Taisor','Rs.7.52 - 13.04 Lakh *','Rs.7.74 - 13.04 Lakh *','FRONX vs Taisor','');
var car05 = new Compare('https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/XL6/10384/1688385191052/front-left-side-47.jpg?tr=w-200','https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Ertiga/10293/1697697779799/front-left-side-47.jpg?tr=w-200','XL6','Ertiga','Rs.11.71 - 14.77 Lakh *','Rs.8.84 - 13.13 Lakh *','XL6 vs Ertiga','');

var com_arr = [car01,car02,car03,car04,car05]

document.querySelector('#compare').innerHTML+=`
      <div class="crouselitem">
      
            <h1>Compare to buy the right car</h1>
            <ul>
            </ul>
            <a href="#compare5" class="myleftcom" ><i class="fa fa-angle-right" style="font-size:24px"></i></a>
            <a href="#compare1" class="myrightcom" ><i class="fa fa-angle-left" style="font-size:24px"></i></a>

      </div>
`;                 
for(var i in com_arr){
      document.querySelector('#compare>.crouselitem>ul').innerHTML+=`
    <div class='col-md-3'>
         <li class="li" id="${com_arr[i].link}">
            <a href="#">
                  <div class="compare_cars">
                        <div class="car_data">
                              <div class="car_img com_img">
                                    <img src="${com_arr[i].img01}">
                              </div>
                              <div class="car_details">
                                    <p class="name">${com_arr[i].name01}</p>
                                    <p class="price">${com_arr[i].price01}</p>
                              </div>
                        </div>
                        <div class="car_data">
                              <div class="car_img com_img">
                                    <img src="${com_arr[i].img02}">
                              </div>
                              <div class="car_details text-right">
                                    <p class="name">${com_arr[i].name02}</p>
                                    <p class="price">${com_arr[i].price02}</p>
                              </div>
                        </div>
                  </div>
                  <span class="versess">VS</span>
                  <div class="butn text-center">
                        <a href="#" class="compare_btn">${com_arr[i].btn}</a>
                  </div>
            </a>
      </li>
    </div>
`;
}