'use ctrict';

const submitForm = () => {
  const form = document.querySelectorAll('form');
  const phoneValue = document.querySelectorAll('input[name="phone"]');
  const nameValue = document.querySelectorAll('input[name="name"]');

  
  nameValue.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/\d|[a-z]/gi, '');
    });
  });


  // phoneValue.forEach((item) => {
  //   item.addEventListener('input', () => {
  //     item.value = item.value.replace(/\D|[+]/g, '');
  //   });
  // });

  const message = document.createElement('div');
  message.textContent = 'идет отправка';
  message.style.color = 'steelblue';


  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  };


  form.forEach((item) => {
    item.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.createElement('div');
      message.textContent = 'идет отправка';
      message.style.color = 'steelblue';
      item.appendChild(message);
      const formData = new FormData(item);
      let body = {};
      formData.forEach((val, key) => {
        body[key] = val;
      });

      const input = item.querySelectorAll('input');
      input.forEach(elem => elem.value = '');

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('erorr')
          }
          message.textContent = 'отправлено';
          setTimeout(message.remove(), 3000);
        })
        .catch(() => {
          message.textContent = 'ошибка';
          setTimeout(message.remove(), 3000);
          console.log(error);
        });
    });
  });
}

submitForm();