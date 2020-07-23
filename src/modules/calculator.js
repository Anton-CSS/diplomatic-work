'use strict';

const calculator = () =>{
  const m1 = document.getElementById('m1'),
        m2 = document.getElementById('m2'),
        m3 = document.getElementById('m3'),
        m4 = document.getElementById('m4'),
        cardOrder = document.getElementById('card_order'),
        priceMessage = document.getElementById('price-total'),
        cardLetoMozaika = document.getElementById('card_leto_mozaika'),
        cardLetoSchelkovo = document.getElementById('card_leto_schelkovo');

        cardOrder.addEventListener('click', (event)=>{
          let target = event.target;
          if (target === m1 && cardLetoMozaika.checked){
            priceMessage.textContent = '1999'
          } else if(target === m1 && cardLetoSchelkovo.checked){
            priceMessage.textContent = '2999'
          } else if(target === m2 && cardLetoSchelkovo.checked){
            priceMessage.textContent = '14990'
          }else if(target === m2 && cardLetoMozaika.checked){
            priceMessage.textContent = '9990'
          }else if(target === m3 && cardLetoSchelkovo.checked){
            priceMessage.textContent = '21990'
          }else if(target === m3 && cardLetoMozaika.checked){
            priceMessage.textContent = '13990'
          }else if(target === m4 && cardLetoSchelkovo.checked){
            priceMessage.textContent = '24990'
          }else if(target === m4 && cardLetoMozaika.checked){
            priceMessage.textContent = '19990'
          }
        });
};

calculator()