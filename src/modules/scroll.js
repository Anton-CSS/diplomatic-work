'use strict';

const scroll = () =>{
  const totop = document.getElementById('totop');
  const header = document.getElementById('header');


  window.addEventListener('scroll', function() {
    let a = document.documentElement.scrollTop;
     if( a > 50){
      totop.style.bottom = '10px';
     } else{
      totop.style.bottom = '-100px';
     }
  });


  totop.addEventListener('click', (e) => {
    e.preventDefault();
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }); 
  });
}

 //scroll();
export default scroll;