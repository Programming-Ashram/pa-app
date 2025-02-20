import Visual from "../export/visual.js";

let visual1 = new Visual('https://stimg.cardekho.com/images/cms/webstory/webstory_64de1ec0af5db.jpg' , 'BYD Seagull Electric Hatchback Trademark Filed In India');

let visual2 = new Visual('https://stimg.cardekho.com/images/cms/webstory/webstory_64db97cb7848b.jpg' , 'Check Out The Newly Unveiled Mahindra Thar.e And The Global Pik Up Concepts!');

let visual3 = new Visual('https://stimg.cardekho.com/images/cms/webstory/webstory_64d79f61f3846.jpg' , 'A News Roundup Of Car Headlines This Week (Aug 7-11)');

let visual4 = new Visual('https://stimg.cardekho.com/images/cms/webstory/webstory_64d63c4ca26db.jpg' , 'Maruti Ertiga vs Toyota Rumion: Top 5 Differences In Pictures');


let stories = [visual1 , visual2 ,visual3, visual4 ];

let visualCar = document.getElementById('visualCar');

for(let i = 0 ; i < stories.length ; i++){
     visualCar.innerHTML +=`
          <div class="col-md-3">
                         <div class="text-center rounded position-relative">
                              <img src="${stories[i].visualImg}" alt="">
                             <div class='position-absolute bottom-0'>
                                    <p class='text-light'>${stories[i].visualDetail}</p>
                             </div>
                         </div>
                    </div>
     `
}