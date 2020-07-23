'use strict';

const slider = () =>{
  const mainSlider = document.querySelector('.main-slider'),
        slideMain = document.querySelectorAll('.slide__main');
  let currentSlide = 0,
      interval;


  const autoPlaySlide = () => {

    slideMain[currentSlide].style.display = 'none';
    currentSlide++;
    if (currentSlide >= slideMain.length) {
      currentSlide = 0;
    }
    slideMain[currentSlide].style.display = 'flex';
  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  startSlide(3000);

};


slider();