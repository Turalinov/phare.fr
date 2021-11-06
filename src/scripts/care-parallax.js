(function(){
  console.log('care parallax');

  careDevices = document.querySelector('.care__devices');

  if (careDevices) {

  careDevices.addEventListener('mouseover', (e) => {
    carePhone = document.querySelector('.care__phone');
    careMacbook = document.querySelector('.care__macbook');


    const el = e.target;

    console.log(el);

    runScale('care__phone', carePhone, true);
    runScale('care__macbook', careMacbook, false);

       function runScale(className, node, document) {

        let transform = document ? `transform: scale(1.1) rotate(-10deg)` : `transform: scale(1.1)`;


          if(el.classList.contains(`${className}`)) {
            node.style.cssText = transform;
          }
        }




  })

   careDevices.addEventListener('mouseout', (e) => {
    carePhone = document.querySelector('.care__phone');
    careMacbook = document.querySelector('.care__macbook');


    const el = e.target;


    stopScale('care__phone', carePhone);
    stopScale('care__macbook', careMacbook);

       function stopScale(className, node) {

          if(el.classList.contains(`${className}`)) {
            node.style.cssText = `transform: initial`;
          }
        }




  })
  }


})();
