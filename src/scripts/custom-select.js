(function(){
  let customSelect = {
  selector: '.custom-select',

  run(customSelects) {

    console.log({
      customSelects
    });
    console.log('=========== run ===========');

    for (let customSelect of customSelects) {

      let select = customSelect.querySelector('select')
      let options = customSelect.querySelectorAll('option')
      let firstOptionText = options[0].innerText;
      console.log({
        select
      });
      console.log({
        options
      });
      console.log({
        firstOptionText
      });

      let selectedItem = document.createElement('div');
      selectedItem.classList.add('selected-item');
      selectedItem.innerHTML = firstOptionText;

      customSelect.appendChild(selectedItem);

      let allItems = document.createElement('div');
      allItems.classList.add('all-items', 'all-items-hide');

      customSelect.appendChild(allItems);


      for (let option of options) {

        let optionText = option.innerText


        if (option.selected == true ) {

          selectedItem.innerHTML = optionText
        }




        let item = document.createElement('div');
        item.classList.add('item');
        item.setAttribute('data-value', option.value)
        item.innerHTML = optionText;

        item.addEventListener('click', function () {
          selectedItem.innerHTML = optionText
          selectedItem.classList.remove('rotate_icon')
          allItems.classList.add('all-items-hide')
          select.value = item.getAttribute('data-value')
          select.dispatchEvent(new Event('change'));
        })


        allItems.appendChild(item);

      }




      let selectedItemEl = customSelect.querySelector('.selected-item');



      let allItemsEl = customSelect.querySelector('.all-items')

      console.log({
        selectedItemEl
      });
      console.log({
        allItemsEl
      });

      selectedItemEl.addEventListener('click', function (e) {
        let currentSelectedItem = this;
        console.log({
          currentSelectedItem
        });
        let currentAllItems = currentSelectedItem.nextElementSibling
        console.log({
          currentAllItems
        });


        currentAllItems.classList.toggle("all-items-hide");
        currentSelectedItem.classList.toggle('rotate_icon')

        e.stopPropagation();
      });



    }

    document.addEventListener('click', function () {

      console.log({re: customSelects});
        let opened = document.querySelectorAll('.all-items:not(.all-items-hide)')


        for (let item of opened) {
          item.classList.add('all-items-hide');
        }



        let selectedI = document.querySelectorAll('.selected-items')

        for (let itemselectedI of selectedI) {
          itemselectedI.classList.remove('rotate_icon');
        }

    })

  },

  init() {
    console.log('=========== init ===========');
    const customSelects = document.querySelectorAll(this.selector);
    console.log(customSelects);

    if (customSelects.length > 0) {
      this.run(customSelects)
    }
  },
}

customSelect.init()

})();
