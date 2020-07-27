'use strict';

const sendForm = () => {
  const form = document.querySelectorAll('form'),   
  name = document.querySelectorAll('input[name="name"]'),
  footerForm = document.getElementById('footer_form'),
  form2 = document.getElementById('form2'),
  form1 = document.getElementById('form1'),
  thanks = document.getElementById('thanks'),
  footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
  footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
  cardOrder = document.getElementById('card_order'),
  formContent = thanks.querySelector('.form-content'),
  bannerForm = document.getElementById('banner-form'),
  banner = document.getElementById('banner'),
  cardCheck = document.getElementById('card_check'),
  check = document.getElementById('check'),
  check1 = document.getElementById('check1'),
  check2 = document.getElementById('check2'),
  input1 = cardOrder.querySelector('input[name="name"]'),
  input2 = cardOrder.querySelector('input[name="phone"]'),
  inputs = cardOrder.querySelectorAll('input[name="card-type"]');


  name.forEach(item =>{
    item.addEventListener('input', () =>{
      let a = /[^а-яА-Я]/g;
      item.value = item.value.replace(a, '');
    });
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


  form.forEach((item) =>{
    item.addEventListener('submit', (event) => {
      
      if(document.querySelector('.required')){
        document.querySelector('.required').remove();
      }

      if(event.target === form2 || event.target === form1|| event.target === bannerForm || event.target === footerForm || event.target === cardOrder){
        
        let target = event.target;
        
          if(check2.checked || check.checked || check1.checked || cardCheck.checked || footerLetoMozaika.checked || footerLetoSchelkovo.checked){
            
            const formPhone = target.querySelector('input[name="phone"]'),
                  formName = target.querySelector('input[name="name"]');
              
            if(formPhone.value === '' ){
              event.preventDefault();
              
            } else{
              if(formName && formName.value === ''){
                event.preventDefault();
              } else{
                event.preventDefault();
                check1.checked = false;
                check2.checked = false;
                check.checked = false;
                cardCheck.checked = false;
                target.appendChild(statusMessage);
                statusMessage.style.display = 'block';

                const formData = new FormData(target);
                let body = {};
                formData.forEach((val, key) => {
                  body[key] = val;
                });
                
                if(target === footerForm && footerLetoMozaika.checked) {
                    body['club-name'] = 'mozaika';
                  } else if(target === footerForm && footerLetoSchelkovo.checked){
                    body['club-name'] = 'schelkovo';
                  }
                footerLetoMozaika.checked = false;
                footerLetoSchelkovo.checked = false;

                if(target === cardOrder ){
                  inputs.forEach(item => {
                    if (item.checked){
                      body['card-type'] = item.attributes[3].value;
                      body['form_name'] = 'Заказать карту';
                    }
                  });
                }
                
                const input3 = cardOrder.querySelector('.message-promo');
                
                if(input3){
                  input3.value = '';
                }

                const input = target.querySelectorAll('input');
                input.forEach(elem => elem.value = '');
                

                postData(body)
                  .then((response) => {
                    if (response.status !== 200) {
                      throw new Error('status network not 200');
                    }
                    
                    if (target === footerForm) {
                      thanks.classList.toggle('active');
                      statusMessage.style.display = 'none';
                    } else if(target === cardOrder){
                      statusMessage.style.display = 'none';
                      item.appendChild(message);
                      message.style.textAlign = 'center';
                      message.style.fontSize = '20px';
                      setTimeout(noMessage, 3000);
                    }else {
                      statusMessage.style.display = 'none';
                      target.appendChild(message);
                      setTimeout(noMessage, 3000);
                    }

                  })
                  .catch((error) => {

                    if (target === footerForm) {
                      thanks.classList.toggle('active');
                      formContent.innerHTML = `<h4>Ошибка</h4>
                     <p style="margin: auto">Попробуйте отправить сообщение позже</p>
                     `
                      console.log(error);

                    } else if(target === cardOrder){
                      statusMessage.style.display = 'none';
                      message.textContent = 'ОШИБКА';
                      message.style.textAlign = 'center';
                      message.style.fontSize = '20px';
                      item.appendChild(message);
                      setTimeout(noMessage, 3000);
                      console.log(error);

                    } else {
                      statusMessage.style.display = 'none';
                      message.textContent = 'ОШИБКА';
                      target.appendChild(message);
                      setTimeout(noMessage, 3000);
                      console.log(error);
                    }
                  });
              }
            }
          } else if(check1.checked === false && target === bannerForm){
              let bannerMessage = document.createElement('div');
              bannerMessage.textContent = 'Согласие на обработку данных обязательно'.toLocaleUpperCase();
              bannerMessage.setAttribute('class', 'required');
              bannerMessage.style.color = 'steelblue';
              bannerMessage.style.textAlign = 'center';
              bannerMessage.style.margin = 'auto';
              banner.appendChild(bannerMessage);

              event.preventDefault();
          }else if(cardCheck.checked === false && target === cardOrder){
            let bannerMessage = document.createElement('div');
              bannerMessage.textContent = 'Согласие на обработку данных обязательно'.toLocaleUpperCase();
              bannerMessage.setAttribute('class', 'required');
              bannerMessage.style.color = 'steelblue';
              bannerMessage.style.textAlign = 'center';
              bannerMessage.style.margin = 'auto';
              cardOrder.appendChild(bannerMessage);
              
              event.preventDefault();
          } else{
            event.preventDefault();
          }
      }
    });
  });
};

// sendForm();
export default sendForm;