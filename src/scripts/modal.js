(function() {

  console.log('support modal');
  const links = document.querySelectorAll('.support-btn');

  if (links.length > 0) {
    const modal = document.getElementById('modal-support');
    const close = modal.querySelector('#modal-support .modal__close');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
        console.log(e);
        e.preventDefault();
        modal.classList.add('modal--showed');
      })
    });


    close.addEventListener('click', () => {
      modal.classList.remove('modal--showed');
   })


  }





})();
