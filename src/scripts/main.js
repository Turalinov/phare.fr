(function() {
  console.log(1);
  const menuToggle = document.querySelector('.menu__toggle');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body')

  menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('menu--opened')
    body.classList.toggle('body--locked')
  })
})()
