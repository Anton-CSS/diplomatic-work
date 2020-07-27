'use strict';

const calculator = () => {
  const m1 = document.getElementById('m1'),
    m2 = document.getElementById('m2'),
    m3 = document.getElementById('m3'),
    m4 = document.getElementById('m4'),
    cardOrder = document.getElementById('card_order'),
    priceMessage = document.getElementById('price-total'),
    cardLetoMozaika = document.getElementById('card_leto_mozaika'),
    cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
    callbackFormName = document.getElementById('callback_form-name'),
    callbackFormPhone = document.getElementById('callback_form-phone'),
    messagePromo = document.querySelector('.message-promo');


  cardOrder.addEventListener('click', (event) => {
    let target = event.target;
    if (target === m1 && cardLetoMozaika.checked) {
      priceMessage.textContent = '1999';
    } else if (target === m1 && cardLetoSchelkovo.checked) {
      priceMessage.textContent = '2999';
    } else if (target === m2 && cardLetoSchelkovo.checked) {
      priceMessage.textContent = '14990';
    } else if (target === m2 && cardLetoMozaika.checked) {
      priceMessage.textContent = '9990';
    } else if (target === m3 && cardLetoSchelkovo.checked) {
      priceMessage.textContent = '21990';
    } else if (target === m3 && cardLetoMozaika.checked) {
      priceMessage.textContent = '13990';
    } else if (target === m4 && cardLetoSchelkovo.checked) {
      priceMessage.textContent = '24990';
    } else if (target === m4 && cardLetoMozaika.checked) {
      priceMessage.textContent = '19990';
    } else if (target === cardLetoMozaika) {
      priceMessage.textContent = '1999';
      m1.checked = 'true';
    } else if (target === cardLetoSchelkovo) {
      priceMessage.textContent = '2999';
      m1.checked = 'true';
    }
  });

  messagePromo.addEventListener('input', (event) => {
    let promo = messagePromo.value.toUpperCase();
    if (promo === 'ТЕЛО2019') {
      cardOrder.addEventListener('click', (event) => {
        let target = event.target;
        if (target === m1 && cardLetoMozaika.checked) {
          let a = Math.floor(1999 - (1999 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m1 && cardLetoSchelkovo.checked) {
          let a = Math.floor(2999 - (2999 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m2 && cardLetoSchelkovo.checked) {
          let a = Math.floor(14990 - (14990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m2 && cardLetoMozaika.checked) {
          let a = Math.floor(9990 - (9990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m3 && cardLetoSchelkovo.checked) {
          let a = Math.floor(21990 - (21990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m3 && cardLetoMozaika.checked) {
          let a = Math.floor(13990 - (13990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m4 && cardLetoSchelkovo.checked) {
          let a = Math.floor(24990 - (24990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === m4 && cardLetoMozaika.checked) {
          let a = Math.floor(19990 - (19990 / 100 * 30));
          priceMessage.textContent = a;
        } else if (target === cardLetoMozaika) {
          let a = Math.floor(1999 - (1999 / 100 * 30));
          priceMessage.textContent = a;
          m1.checked = 'true';
        } else if (target === cardLetoSchelkovo) {
          let a = Math.floor(2999 - (2999 / 100 * 30));
          priceMessage.textContent = a;
          m1.checked = 'true';
        }
      });
    } else {
      cardOrder.addEventListener('click', (event) => {
        let target = event.target;
        if (target === m1 && cardLetoMozaika.checked) {
          priceMessage.textContent = '1999';
        } else if (target === m1 && cardLetoSchelkovo.checked) {
          priceMessage.textContent = '2999';
        } else if (target === m2 && cardLetoSchelkovo.checked) {
          priceMessage.textContent = '14990';
        } else if (target === m2 && cardLetoMozaika.checked) {
          priceMessage.textContent = '9990';
        } else if (target === m3 && cardLetoSchelkovo.checked) {
          priceMessage.textContent = '21990';
        } else if (target === m3 && cardLetoMozaika.checked) {
          priceMessage.textContent = '13990';
        } else if (target === m4 && cardLetoSchelkovo.checked) {
          priceMessage.textContent = '24990';
        } else if (target === m4 && cardLetoMozaika.checked) {
          priceMessage.textContent = '19990';
        } else if (target === cardLetoMozaika) {
          priceMessage.textContent = '1999';
          m1.checked = 'true';
        } else if (target === cardLetoSchelkovo) {
          priceMessage.textContent = '2999';
          m1.checked = 'true';
        }
      });
    }
  }); 
      
  callbackFormName.addEventListener('input', () =>{
    let promo = messagePromo.value.toUpperCase();
    if (promo === 'ТЕЛО2019') {
      let a = Math.floor(2999 - (2999 / 100 * 30));
      priceMessage.textContent = a;
      }else {
      priceMessage.textContent = 2999;
    }
  });
    

  callbackFormPhone.addEventListener('input', () =>{
    let promo = messagePromo.value.toUpperCase();
    if (promo === 'ТЕЛО2019') {
      let a = Math.floor(2999 - (2999 / 100 * 30));
      priceMessage.textContent = a;
      }else {
      priceMessage.textContent = 2999;
    }
  });  
};


 //calculator();
export default calculator;