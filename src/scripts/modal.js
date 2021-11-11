(function() {

  console.log('support modal');
  const link = document.getElementById('support');
  const modal = document.getElementById('modal-support');
  const close = modal.querySelector('#modal-support .modal__close');


  link.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    modal.classList.add('modal--showed');
  })


  close.addEventListener('click', () => {
    modal.classList.remove('modal--showed');
  })



})();
