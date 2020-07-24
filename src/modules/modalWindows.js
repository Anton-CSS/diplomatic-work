'use strict';
const modalWindows = () =>{

  const body = document.querySelector('body'),
      fixedGift = document.querySelector('.fixed-gift'),
      popupMenu = document.querySelector('.popup-menu'),
      gift = document.getElementById('gift'),
      callbackForm = document.getElementById('callback_form'),
      freeVisitForm = document.getElementById('free_visit_form'),
      clubsUl = document.getElementById('clubs-ul'),
      thanks = document.getElementById('thanks');


      body.addEventListener('click', (event) =>{
        let target = event.target;

        if(target.closest('.clubs-list')){
          clubsUl.classList.toggle('active');
        } else if(target.closest('.open-popup')){
          freeVisitForm.classList.toggle('active');
         } else if(target.closest('.overlay') || target.closest('.close-form') || target.closest('.close-btn')|| target.closest('.close-menu-btn') || target.closest('.close_icon') || target.closest('.close-btn')){
           freeVisitForm.classList.remove('active');
           callbackForm.classList.remove('active');
           gift.classList.remove('active');
           thanks.classList.remove('active');
           popupMenu.classList.remove('active-flex');
         } else if(target.closest('.btn-bell')){
          callbackForm.classList.toggle('active');
         } else if(target.closest('.fixed-gift')){
          gift.classList.toggle('active');
          fixedGift.style.display = 'none';
         }else if(target.closest('.menu-img')){
          popupMenu.classList.toggle('active-flex');
         }else {
          clubsUl.classList.remove('active');
        }
        
      });
      
}

modalWindows();

// export default modalWindows;