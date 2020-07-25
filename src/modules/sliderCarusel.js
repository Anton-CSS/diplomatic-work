'use strict';

const sliderCarousel = () => {
  class SliderCarousel {
    constructor({ main, wrap, position = 0, slidesToShow = 3, infinity, responsive = [] }) {
      if (!main || !wrap) {
        console.warn('slider-carousel: Необходимо 2 свойства - main и wrap');
      }
      this.main = document.querySelector(main);
      this.wrap = document.querySelector(wrap);
      this.slides = document.querySelector(wrap).children;
      this.slidesToShow = slidesToShow;
      this.infinity = false;
      this.responsive = responsive;
      this.options = {
        position,
        widthSlide: Math.floor(100 / this.slidesToShow),
        infinity,
      };
    }

    init() {
      this.addGloClass();
      this.addStyle();

      if (this.next && this.prev) {
        this.controlSlider();
      } else {
        this.addArrow();
        this.controlSlider();
      }
      if (this.responsive) {
        this.responsiveInit();
      }
    }

    addGloClass() {
      this.main.classList.add('glo-slider');
      this.wrap.classList.add('glo-slider--wrap');
      for (let item of this.slides) {
        item.classList.add('glo-slider--item');
      }
    }

    addStyle() {
      const style = document.createElement('style');
      style.id = 'sliderCarousel-style';
      style.textContent = `
    .glo-slider{
      overflow: hidden ;
    }
    .glo-slider--wrap{
      display: flex;
      
      transition: transform 0.5s linear ;
      transform: translateX(0) ;
      will-change: transform ;
    }
    .glo-slider--item{
      flex: 0 0 ${this.options.widthSlide}% ;

    }
    `
      document.head.appendChild(style);
    }

    
    controlSlider() {
      this.next.addEventListener('click', this.nextSlider.bind(this));
      this.prev.addEventListener('click', this.prevSlider.bind(this));
    }

    prevSlider() {
      if (this.options.infinity || this.options.position > 0) {
        --this.options.position;
        if (this.options.position < 0) {
          this.options.position = this.slides.length - this.slidesToShow;
          
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }
    }

    nextSlider() {
      if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
        ++this.options.position;
        if (this.options.position > this.slides.length - this.slidesToShow) {
          this.options.position = 0;
        }
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
      }

    }

    addArrow() {

      const createPrev = () =>{
        let div = document.createElement('div');
        div.classList.add('gallery-prev');
        div.classList.add('services-prev--left');
        this.main.appendChild(div);
        this.prev = div;
      };
    
      const createNext = () =>{
        let div = document.createElement('div');
        div.classList.add('gallery-next');
        div.classList.add('services-prev--right');
        this.main.appendChild(div);
        this.next = div;
      }
    
      createPrev();
      createNext();
    }

    responsiveInit() {
      const slidesToShowDefaut = this.slidesToShow,
        allResponse = this.responsive.map(item => item.breakpoint),
        maxResponse = Math.max(...allResponse),
        checkResponse = () => {
          const widhtWindow = document.documentElement.clientWidth;
          if (widhtWindow < maxResponse) {
            for (let i = 0; i < allResponse.length; ++i) {
              if (widhtWindow < allResponse[i]) {
                this.slidesToShow = this.responsive[i].slidesToShow;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
              }
            }
          }
          else {
            this.slidesToShow = slidesToShowDefaut;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        };

      checkResponse();

      window.addEventListener('resize', checkResponse);
    }
  }

  




  const caruosel = new SliderCarousel({
    main: '.slider-arrow',
    wrap: '.services-slider',
    infinity: true,
    slidesToShow: 5,
    next: '.next',
    prev: '.prev',
    responsive: [{
      breakpoint: 1024,
      slidesToShow: 3
    },
    {
      breakpoint: 768,
      slidesToShow: 2
    }, {
      breakpoint: 480,
      slidesToShow: 1
    }]
  });

  caruosel.init();

}



 sliderCarousel();
// export default sliderCarousel;