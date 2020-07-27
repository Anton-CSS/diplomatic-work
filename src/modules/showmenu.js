'use strict';

const showMenu = () =>{
  
  const topMenu = document.querySelector('.top-menu');
  
    window.addEventListener('scroll', () => {
      if (document.documentElement.clientWidth < 768) {
        let b = document.documentElement.scrollTop,
        a = document.documentElement.clientWidth;

        topMenu.style.position = 'absolute';
        topMenu.style.top = `${b}px`;

        if (b < 200) {
          if(a >= 578 && a <= 768){
            topMenu.style.top = '180px';
          } else if(a >= 390 && a <= 577){
            topMenu.style.top = '230px';
          } else if(a < 390 && a >= 340){
            topMenu.style.top = '290px';
          } else if(a < 340){
            topMenu.style.top = '310px';
          }
        }
      
    } else{
    topMenu.style.position = 'static';
    }
  });
}

  

//showMenu();

 export default showMenu;