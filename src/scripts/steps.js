(function () {
  let stepNames = document.querySelector('.steps__names');
  // чтобы подстветить первую нужно нажать добавить класс steps__names--done2/3


  if (stepNames) {

    let obj = {};
    let obj1 = {};
    let obj2 = {};
    let obj3 = {};


    const stepForm1 = document.getElementById('step-form1')
    const stepForm2 = document.getElementById('step-form2')
    const stepForm3 = document.getElementById('step-form3')

    const stepBtn1 = document.getElementById('step-btn1')

    const stepBack = document.getElementById('step-back2');
    const stepBack2 = document.getElementById('step-back3');

    const modifier = document.getElementById('modifier');

    const stepsContent = document.getElementById('steps__content-wrap');
    const thanks = document.getElementById('steps__thanks');



    let contentEntreprise = document.getElementById('entreprise_check');
    let contentSiret = document.getElementById('siret_check');
    let contentSalaries = document.getElementById('salaries_check');
    let contentAddress = document.getElementById('address_check');

    const checkPolitics = document.getElementById('check-poliitics')


    let stepsIndicators = document.querySelectorAll('.steps__indicator-item');

    console.log({
      stepNames
    });


    const form1 = document.getElementById('form1')
    const form2 = document.getElementById('form2')
    const form3 = document.getElementById('form3')

    form1.addEventListener('submit', function (e) {
      //отменяем на всякий случай действие по умолчанию
      e.preventDefault();

      //получаем кнопку
      const btn = form1.querySelector('button.form__btn');

      console.log(btn); //получаем данные

      let inputs = form1.elements;



      for (let i = 0; i < inputs.length; i++) {

        let input = inputs.item(i);
        let name = input.name;
        let error = input.nextElementSibling

        let value = String(input.value).trim()
        let tagName = input.tagName.toLowerCase();


        console.log(tagName);
        if (tagName == 'button') {
          continue;
        }

        if (input.classList.contains('tel')) {
          if (value.length != 26) {
            error.classList.add('form__error--active')
            return false;
          } else {

            // value = value.replace(/\s/g, '');

            error.classList.remove('form__error--active')
          }
        }


        if (value == "") {
          error.classList.add('form__error--active')
          return false;
        } else {
          error.classList.remove('form__error--active');
          obj[name] = value;
        }




      }

      console.log('есть данные пора переходить к следующему шагу ');
      onSecond()

    });



    stepBack.addEventListener('click', function (e) {
      e.preventDefault();
      onFirst();
    });


    form2.addEventListener('submit', function (e) {
      //отменяем на всякий случай действие по умолчанию
      e.preventDefault();

      //получаем кнопку
      const btn = form2.querySelector('button.form__btn');

      console.log(btn); //получаем данные

      let inputs = form2.elements;


      for (let i = 0; i < inputs.length; i++) {

        let input = inputs.item(i);
        let name = input.name;
        let error = input.nextElementSibling

        let value = String(input.value).trim()
        let tagName = input.tagName.toLowerCase();


        console.log(tagName);

        if (tagName == 'select') {
          let customSelect = input.closest('.custom-select')
          let errorContent = customSelect.nextElementSibling


          if (value == "Choisir") {
            errorContent.classList.add('form__error--active')
            return false;

          } else {
            errorContent.classList.remove('form__error--active')
          }

        }


        if (tagName == 'button') {
          continue;
        }

        if (input.classList.contains('tel')) {
          if (value.length != 26) {
            error.classList.add('form__error--active')
            return false;
          } else {

            value = value.replace(/\s/g, '');

            error.classList.remove('form__error--active')
          }
        }


        if (value == "") {
          error.classList.add('form__error--active')
          return false;
        } else {
          error.classList.remove('form__error--active');
          obj1[name] = value;
        }




      }

      console.log(obj);
      console.log(obj1);
      console.log('есть данные пора переходить к следующему шагу ');




      form3.firstname_check.value = obj.firstname
      form3.firstname_check.disabled = true;
      form3.lastname_check.value = obj.lastname
      form3.lastname_check.disabled = true;
      form3.email_check.value = obj.email
      form3.email_check.disabled = true;
      form3.phone_check.value = obj.phone
      form3.phone_check.disabled = true;

      const allItems = document.querySelectorAll('#form3 .all-items > .item');

      allItems.forEach(item => {
        let attr = item.getAttribute('data-value');
        if (attr == obj1['department']) {
        item.click();
        }
      })







      form3.role_check.value = obj1.role
      form3.role_check.disabled = true;


      contentEntreprise.innerText = obj1.entreprise;
      contentSiret.innerText = obj1.siret;
      contentSalaries.innerText = obj1.address;
      contentAddress.innerText = obj1.salaries;

      onThird()

    });

    stepBack2.addEventListener('click', function (e) {
      e.preventDefault();
      onSecond();
    });

    modifier.addEventListener('click', function (e) {

      form3.firstname_check.disabled = false;

      form3.lastname_check.disabled = false;

      form3.email_check.disabled = false;

      form3.phone_check.disabled = false;

      // form3.department_check[obj1.department].selected = false;

      form3.role_check.disabled = false;
    })



    form3.addEventListener('submit', function (e) {
      //отменяем на всякий случай действие по умолчанию
      e.preventDefault();

      //получаем кнопку
      const btn = form2.querySelector('button.form__btn');

      console.log(btn); //получаем данные

      let inputs = form3.elements;


      for (let i = 0; i < inputs.length; i++) {

        let input = inputs.item(i);
        let name = input.name;
        let error = input.nextElementSibling

        let value = String(input.value).trim()
        let tagName = input.tagName.toLowerCase();


        console.log(tagName);



        if (tagName == 'select') {
          let customSelect = input.closest('.custom-select')
          let errorContent = customSelect.nextElementSibling


          if (value == "Choisir") {
            errorContent.classList.add('form__error--active')
            return false;

          } else {
            value = input.selectedIndex;
            errorContent.classList.remove('form__error--active')
          }

        }


        if (tagName == 'button') {
          continue;
        }

        if (input.classList.contains('tel')) {
          if (value.length != 26) {
            error.classList.add('form__error--active')
            return false;
          } else {

            value = value.replace(/\s/g, '');

            error.classList.remove('form__error--active')
          }
        }


        if (value == "") {
          error.classList.add('form__error--active')
          return false;
        } else {
          error.classList.remove('form__error--active');
          obj2[name] = value;
        }


      }

      if (checkPolitics.checked) {
        // alert('checkPolitics checked', checkPolitics.checked)
      } else {
        alert('La transparence compte chez Phare. Regardez nos Termes et Conditions avant de cocher cette case.')
        return false
      }

      console.log('есть данные пора переходить к следующему шагу');

      console.log({obj2});

      const departmentMain =document.getElementById('department-main')


      obj3 = {
        department: departmentMain.options[obj2.department_check].value,
        email: obj2.email_check,
        firstname: obj2.firstname_check,
        lastname: obj2.lastname_check,
        phone: obj2.phone_check,
        role: obj2.role_check,
        entreprise : contentEntreprise.innerText,
        siret : contentSiret.innerText,
        address : contentSalaries.innerText,
        salaries : contentAddress.innerText,
      };



      console.log({
        obj3
      });




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
    postQuizData('/action-form.php', { messageObj : obj3})
    .then((data) => {
      if(data.status) {
        this.reset();
        stepsContent.classList.add('hide')
        thanks.classList.add('active')
      }
    });






    console.log('форма отправлена');


// address: "2222222222525252"
// department: 2
// email: "DDDDD@DSDF"
// entreprise: "22222222"
// firstname: "FFFFFFFFF"
// lastname: "FFFFFFFFFFD"
// phone: "+338-88-88-88-88"
// role: "DFDF"
// salaries: "3"
// siret: "252525"




      //      onThird()

    });

    function onFirst() {

      stepForm1.classList.add('active')
      stepForm2.classList.remove('active')
      stepForm3.classList.remove('active')



      if (stepNames.classList.contains('steps__names--done3')) {
        stepNames.classList.remove('steps__names--done3')
      }
      if (stepNames.classList.contains('steps__names--done2')) {
        stepNames.classList.remove('steps__names--done2')
      }


      stepsIndicators.forEach((stepIndicator, index) => {
        index += 1;

        if (index == 1) {
          stepIndicator.classList.add('steps__indicator-item--active')
        } else {
          stepIndicator.classList.remove('steps__indicator-item--active')

        }

      })

    }

    function onSecond() {
      stepForm1.classList.remove('active')
      stepForm2.classList.add('active')
      stepForm3.classList.remove('active')


      if (stepNames.classList.contains('steps__names--done3')) {
        stepNames.classList.remove('steps__names--done3')
      }

      stepNames.classList.add('steps__names--done2')


      stepsIndicators.forEach((stepIndicator, index) => {
        index += 1;

        if (index != 3) {
          stepIndicator.classList.add('steps__indicator-item--active')
        } else {
          stepIndicator.classList.remove('steps__indicator-item--active')

        }

      })

    }

    function onThird() {
      stepForm1.classList.remove('active')
      stepForm2.classList.remove('active')
      stepForm3.classList.add('active')


      if (stepNames.classList.contains('steps__names--done2')) {
        stepNames.classList.remove('steps__names--done2')
      }

      stepNames.classList.add('steps__names--done3')


      stepsIndicators.forEach((stepIndicator) => {
        stepIndicator.classList.add('steps__indicator-item--active')

      })

    }
  }
})();
