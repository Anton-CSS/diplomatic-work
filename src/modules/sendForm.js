'use strict';

const sendForm = () => {
  const form = document.querySelectorAll('form'),   
  name = document.querySelectorAll('input[name="name"]'), 
  footerForm = document.getElementById('footer_form'),
  thanks = document.getElementById('thanks'),
  footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
  formContent = thanks.querySelector('.form-content');

 
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

      if(event.target === footerForm){
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
        formContent.innerHTML = `<h4>Ошибка</h4>
        <p style="margin: auto">Попробуйте отправить сообщение позже</p>
        `

        postData(body) 
          .then((response) => {
            if(response.status !== 200){
              throw new Error('erorr')
            }
        }) 
        .catch (() => {

          console.log(error);
        });
      } else{
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