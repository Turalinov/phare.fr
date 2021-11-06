(function(){
  console.log('manage parallax');

  const wrapper = document.querySelector('.manage__graph-wrap')

  if (wrapper) {
    const manageEmployeer = wrapper.querySelector('.manage__employeer');
    const manageTrained = wrapper.querySelector('.manage__trained');
    const manageActionImpact = wrapper.querySelector('.manage__action-impact')
    const manageLastMonth = wrapper.querySelector('.manage__last-month')
    const manageClassementDemondes = wrapper.querySelector('.manage__classement-demondes');
    const manageTotal = wrapper.querySelector('.manage__total');

    const manageActionImpactLarge = wrapper.querySelector('.manage__action-impact-large')



    wrapper.addEventListener('mouseover', (e) => {
      const el = e.target.parentNode;


     runScale('manage__employeer', manageEmployeer, 1)
     runScale('manage__trained', manageTrained, 1)
     runScale('manage__action-impact', manageActionImpact, 1)
     runScale('manage__last-month', manageLastMonth, 1)
     runScale('classement-demondes', manageClassementDemondes, 3)
     runScale('total', manageTotal, 3)
     runScale('action-impact-large', manageActionImpactLarge, 2)



      function runScale(className, node, coefficient) {
        let scaleValue = '0.3';
        switch (coefficient) {
          case 1:
            scaleValue = '0.8';
            break;
          case 2:
            scaleValue = '0.7';
            break;
          case 3:
            scaleValue = '0.6';
            break;
          default:
            break;
        }


          if(el.classList.contains(`${className}`)) {
            node.style.cssText = `transform: scale(${scaleValue})`;
          };
        }



    wrapper.addEventListener('mouseout', (e) => {
      const el = e.target.parentNode;



     stopScale('manage__employeer', manageEmployeer)
     stopScale('manage__trained', manageTrained)
     stopScale('manage__action-impact', manageActionImpact)
     stopScale('manage__last-month', manageLastMonth)
     stopScale('classement-demondes', manageClassementDemondes)
     stopScale('total', manageTotal)
     stopScale('action-impact-large', manageActionImpactLarge)

    function stopScale(className, node) {

      if(el.classList.contains(`${className}`)) {
        node.style.cssText = `transform: initial`;
      }
    }

  })



    })

  }
})()
