import Slider from '../export/slider.js';

let slide1 = new Slider('https://stimg.cardekho.com/images/uploadimages/1738232035073/01_Kia-Syros_CD-MasterHead-Desktop_1686x548px.jpg', 'active');

let slide2 = new Slider('https://stimg.cardekho.com/images/uploadimages/1738232348852/01_Skoda-Kylaq_CD-MasterHead-Desktop_1686x548px.jpg', '');


let allSlidersGroup = [slide1, slide2];

let allSlider = document.getElementById('allSlider');

allSlidersGroup.forEach(slide =>{
    allSlider.innerHTML +=`
        <div class="carousel-item ${slide.isActive}">
            <img src="${slide.sliderImg}" class="d-block w-100" alt="...">
        </div>
    `;
})