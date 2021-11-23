(function() {
  console.log('demonstration form');

  const form = document.getElementById('form-subscription');

  if( form ) {
  form.addEventListener('submit', function(e) {
    //отменяем на всякий случай действие по умолчанию
    e.preventDefault();

    //получаем кнопку
    const btn = form.querySelector('.form__btn');


    //получаем данные
    let inputs = form.elements;

    let obj = {};

    for (let i = 0; i < inputs.length; i++) {

      let input = inputs.item(i);
      let name  = input.name;
      let error = input.nextElementSibling

      let value = String(input.value).trim()
      let tagName = input.tagName.toLowerCase();


      console.log(tagName);
      if (tagName == 'button') {
          continue;
      }

      if (input.classList.contains('tel')) {
        if (value.length != 26 ) {
          error.classList.add('form__error--active')
          return false;
        } else {

          value = value.replace(/\s/g, '');

          error.classList.remove('form__error--active')
        }
      }


      if (value == "")  {
        error.classList.add('form__error--active')
        return false;
      } else {
        error.classList.remove('form__error--active');
        obj[name] = value;
      }

      console.log(obj);
    }


        async function postQuizData(url = '', data = {}) {

      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });


      if(response.ok) {
        let json = await response.json();
        return json;
      } else {
        alert('Ошибка HTTP: ' + response.status + 'Попробуйте еще раз позднее.');
      }
    }
    // /wp-content/themes/doverieaudit/action-form.php
    postQuizData('action-form.php', { messageObj : obj})
    .then((data) => {
      if(data.status) {
        this.reset();
        alert('MERCI, VOTRE DEMANDE A ÉTÉ ENVOYÉE');
      }
    });






    console.log('форма отправлена');
  })

  }

})()
