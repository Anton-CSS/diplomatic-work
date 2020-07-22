'use strict';
const modalWindows = () =>{

  const body = document.querySelector('body'),
      fixedGift = document.querySelector('.fixed-gift'),
      gift = document.getElementById('gift'),
      callbackForm = document.getElementById('callback_form'),
      freeVisitForm = document.getElementById('free_visit_form'),
      clubsUl = document.getElementById('clubs-ul');

      body.addEventListener('click', (event) =>{
        let target = event.target;

        if(target.closest('.clubs-list')){
          clubsUl.classList.toggle('active');
        } else if(target.closest('.open-popup')){
          freeVisitForm.classList.toggle('active');
         } else if(target.closest('.overlay') || target.closest('.close-form') || target.closest('.close-btn')){
           freeVisitForm.classList.remove('active');
           callbackForm.classList.remove('active');
           gift.classList.remove('active');
         } else if(target.closest('.callback-btn')){
          callbackForm.classList.toggle('active');
         } else if(target.closest('.fixed-gift')){
          gift.classList.toggle('active');
          fixedGift.style.display = 'none';
         }else {
          clubsUl.classList.remove('active');
        }
        
      });
}

modalWindows();

<script src="src/modules/submitForm.js"></script>