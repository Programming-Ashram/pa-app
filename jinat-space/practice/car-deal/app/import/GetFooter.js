import Footer from "../export/footer.js";

let foot1 = new Footer();
foot1.setTitle('setTitle');

console.log(foot1.getTitle())
let foot2 = new FootMenu("About" ,'https://www.cardekho.com/info/about_us');
let foot3 = new FootMenu("About" ,'https://www.cardekho.com/info/about_us');
let foot4 = new FootMenu("About" ,'https://www.cardekho.com/info/about_us');
let foot5 = new FootMenu("About" ,'https://www.cardekho.com/info/about_us');
let foot6 = new FootMenu("About" ,'https://www.cardekho.com/info/about_us');

let Fmenu =[foot1 , foot2, foot3, foot4, foot5, foot6]

let footerArea = document.getElementById('footerArea');
console.log(Fmenu);
footerArea.innerHTML +=`

     <ul>
          <li><a href="${Fmenu[i].fLink}">${Fmenu[i].foot}</a></li>
     </ul>
`