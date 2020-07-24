'use strict';

const scroll = () =>{
  const totop = document.getElementById('totop');
  const header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if(pageYOffset < document.documentElement.clientHeight){
      totop.style.display = 'block';
    }
  });
  totop.addEventListener('click', (e) => {
    e.preventDefault();
    header.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      }); 
  })
}

scroll();