'use strict';

const sendForm = () => {
  const form = document.querySelectorAll('form'),   
  name = document.querySelectorAll('input[name="name"]'),
  phone = document.querySelectorAll('input[name="phone"]'),
  footerForm = document.getElementById('footer_form'),
  thanks = document.getElementById('thanks'),
  footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
  cardOrder = document.getElementById('card_order'),
  formContent = thanks.querySelector('.form-content'),
  bannerForm = document.getElementById('banner-form'),
  banner = document.getElementById('banner'),
  cardCheck = document.getElementById('card_check'),
  bannerBtn = document.getElementById('banner-btn'),
  cardLetoMozaika = document.getElementById('card_leto_mozaika'),
  inputs = cardOrder.querySelectorAll('input[name="card-type"]');

  console.log(m1);

  check1.setAttribute('required', '');
  cardCheck.setAttribute('required', '');

  name.forEach(item =>{
    item.setAttribute('required', '');
    item.addEventListener('input', () =>{
      let a = /[^а-яА-Я]/g;
      item.value = item.value.replace(a, '');
    });
  });

  phone.forEach(item =>{
    item.setAttribute('required', '');
  });

  const statusMessage = document.createElement('div');
  statusMessage.className = 'sk-rotating-plane';
  const message = document.createElement('div');
  message.textContent = 'Заявка отправлена! Наши менеджеры обязательно свяжутся с вами';
  message.style.color = 'steelblue';
  message.style.margin = 'auto';


  const postData = (body) =>{
    
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });  
  };

  const noMessage = () =>{
    message.remove();
  };

  bannerBtn.addEventListener('click', () =>{
    if(check1.checked === false){
      let message = document.createElement('div');
      message.textContent = 'Согласие на обработку данных обязательно'.toLocaleUpperCase();
      message.setAttribute('class', 'required');
      message.style.color = '#blue';
      message.style.margin = 'auto';
      banner.appendChild(message);
    } 
  });

  

  form.forEach((item) =>{
    item.addEventListener('submit', (event) => {

      if(document.querySelector('.required')){
        document.querySelector('.required').remove();
      }

      if(event.target === footerForm || event.target === bannerForm){

        thanks.classList.toggle('active');
        event.preventDefault();
        const formData = new FormData(item);
        let body = {};
        formData.forEach((val, key) =>{
        body[key] = val;
        });

        if(footerLetoMozaika.checked){
          body['club-name'] = 'mozaika';
        }else{
          body['club-name'] = 'schelkovo';
        }
        
        const input = footerForm.querySelectorAll('input');
        input.forEach(elem => elem.value = '');
        const bannerInput = bannerForm.querySelectorAll('input');
        bannerInput.forEach(elem => elem.value = '');
      
        postData(body) 
          .then((response) => {
            if(response.status !== 200){
              throw new Error('erorr')
            }
        }) 
        .catch (() => {
          formContent.innerHTML = `<h4>Ошибка</h4>
          <p style="margin: auto">Попробуйте отправить сообщение позже</p>
          `
          console.log(error);
        });
      } else if(event.target === cardOrder){
        event.preventDefault();
        cardOrder.appendChild(statusMessage);
        statusMessage.style.display = 'block';
        const formData = new FormData(item);
        let body = {};
        formData.forEach((val, key) =>{
        body[key] = val;
        });


        inputs.forEach(item =>{
          if(item.checked){
            body['card-type'] = item.attributes[3].value;
            body['form_name'] = 'Заказать карту';
          } 
        });

        if(cardLetoMozaika.checked){
          body['club-name'] = cardLetoMozaika.attributes[3].value;
        } else{
          body['club-name'] = 'schelkovo';
        }

        

        const input1 = cardOrder.querySelector('input[name="name"]');
        const input2 = cardOrder.querySelector('input[name="phone"]');
        const input3 = cardOrder.querySelector('.message-promo');
        input1.value = '';
        input2.value = '';
        input3.value = '';

        
        postData(body) 
          .then((response) => {
            if(response.status !== 200){
              throw new Error('erorr')
            }
          statusMessage.style.display = 'none';
          item.appendChild(message);
          message.textContent = 'Заявка отправлена! Наши менеджеры обязательно свяжутся с вами';
          setTimeout(noMessage, 3000);
        }) 
        .catch (() => {
          console.log(error);
          statusMessage.style.display = 'none';
        });
      }else{
        event.preventDefault();
        item.appendChild(statusMessage);
        statusMessage.style.display = 'block';

        const formData = new FormData(item);
        let body = {};
        formData.forEach((val, key) =>{
        body[key] = val;
        });

        const input = item.querySelectorAll('input');
        input.forEach(elem => elem.value = '');

        postData(body) 
          .then((response) => {
            if(response.status !== 200){
              throw new Error('erorr')
            }
          statusMessage.style.display = 'none';
          item.appendChild(message);
          message.textContent = 'Заявка отправлена! Наши менеджеры обязательно свяжутся с вами';
          setTimeout(noMessage, 3000);
        }) 
        .catch (() => {
          statusMessage.style.display = 'none';
          console.log(error);
        });
      }
    });
  });
}

sendForm();