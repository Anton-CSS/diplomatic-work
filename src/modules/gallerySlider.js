'use strict';

const gallerySlider = () =>{
  const slide = document.querySelectorAll('.slide-gallery'),
    slider = document.querySelector('.gallery-slider'),
    galleryDots = slider.querySelector('.gallery-dots');

  let currentSlide = 0,
    interval;

    const createItem = () =>{
      let li = document.createElement('li');
      li.classList.add('dot');
      galleryDots.append(li);
    }


    slide.forEach(item => {
      createItem();
      const dot = document.querySelectorAll('.dot');
      dot[0].classList.add('dot-active');
    });

  const createPrev = () =>{
    let div = document.createElement('div');
    div.classList.add('gallery-prev');
    div.classList.add('gallery-prev--left');
    slider.appendChild(div);
  };

  const createNext = () =>{
    let div = document.createElement('div');
    div.classList.add('gallery-next');
    div.classList.add('gallery-prev--right');
    slider.appendChild(div);
  }

  createPrev();
  createNext();
  
  const dot = document.querySelectorAll('.dot');


  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };
  

  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'dot-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'dot-active');
  };

  const startSlide = (time = 6000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };


  slider.addEventListener('click', (event) => {
    event.preventDefault();
    let target = event.target;

    if (!target.matches('.gallery-prev') && !target.matches('.dot') && !target.matches('.gallery-next')) {
      return;
    }

    prevSlide(slide, currentSlide, 'active');
    prevSlide(dot, currentSlide, 'dot-active');

    if (target.matches('.gallery-next')) {
      currentSlide++;
    } else if (target.matches('.gallery-prev')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    }
    
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'active');
    nextSlide(dot, currentSlide, 'dot-active');
  });

  slider.addEventListener('mouseover', (event) => {
    if(event.target.matches('.gallery-prev') || event.target.matches('.dot') || event.target.matches('.gallery-next')){
      stopSlide();
    }
  });

  slider.addEventListener('mouseout', (event) => {
    if(event.target.matches('.gallery-prev') || event.target.matches('.dot') || event.target.matches('.gallery-next')){
      startSlide();
    }
  });

  startSlide(9000);
};

gallerySlider();

// export default gallerySlider;