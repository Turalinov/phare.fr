(function(){

  console.log('animation lottie');

  const anim = lottie

  // promote-lottie1

  anim.loadAnimation({
    container: document.querySelector('#promote-lottie1'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/promote-lottie1.json',
  })

  anim.loadAnimation({
    container: document.querySelector('#promote-lottie2'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/promote-lottie2.json',
  })

  anim.loadAnimation({
    container: document.querySelector('#promote-lottie3'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/promote-lottie3.json',
  })

  anim.loadAnimation({
    container: document.querySelector('#promote-lottie4'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/promote-lottie4.json',
  })


  anim.loadAnimation({
    container: document.querySelector('#sheme-lottie'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/sheme-lottie.json',
  })


  anim.loadAnimation({
    container: document.querySelector('#opinion-lottie'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/opinion-lottie.json',
  })

  anim.loadAnimation({
    container: document.querySelector('#staff-phone'),
    rendered: 'svg',
    loop: true,
    autoplay: true,
    path: './json/staff-phone.json',
  })


})();
