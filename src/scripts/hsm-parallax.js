(function(){
  console.log('hsm parallax');

  const wrapper = document.querySelector('.hsm__graph-wrap')

  if (wrapper) {
    const hsmSession = wrapper.querySelector('.hsm__session');
    const hsmClassementDemondes = wrapper.querySelector('.hsm__classement-demondes');
    const hsmTotal = wrapper.querySelector('.hsm__total');
    const hsmTaux = wrapper.querySelector('.hsm__taux');

    const hsmActionImpactLarge = wrapper.querySelector('.hsm__action-impact-large')
    const hsmTrained = wrapper.querySelector('.hsm__trained');
    const hsmReport= wrapper.querySelector('.hsm__report');

    const hsmLeaves = wrapper.querySelector('.hsm__leaves');
    const hsmPeoples = wrapper.querySelector('.hsm__peoples');
    const hsmCheck = wrapper.querySelector('.hsm__check');
    const hsmHome = wrapper.querySelector('.hsm__home');

    const hsmWoman = wrapper.querySelector('.hsm__woman');
    const hsmWoman2 = wrapper.querySelector('.hsm__woman2');
    const hsmMan = wrapper.querySelector('.hsm__man');

    wrapper.addEventListener('mouseover', (e) => {
      const el = e.target.parentNode;


     runScale('session', hsmSession, 3)
     runScale('classement-demondes', hsmClassementDemondes, 3)
     runScale('total', hsmTotal, 3)
     runScale('taux', hsmTaux, 2)
     runScale('action-impact-large', hsmActionImpactLarge, 2)
     runScale('hsm__trained', hsmTrained, 1)
     runScale('hsm__report', hsmReport, 1)
     runScale('hsm__leaves', hsmLeaves, 1)
     runScale('hsm__peoples', hsmPeoples, 1)
     runScale('hsm__check', hsmCheck, 1)
     runScale('hsm__home', hsmHome, 1)
     runScale('hsm__woman', hsmWoman, 1)
     runScale('hsm__woman2', hsmWoman2, 1)
     runScale('hsm__man', hsmMan, 1)

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


    })



    wrapper.addEventListener('mouseout', (e) => {
      const el = e.target.parentNode;

     stopScale('session', hsmSession)
     stopScale('classement-demondes', hsmClassementDemondes)
     stopScale('total', hsmTotal)
     stopScale('taux', hsmTaux)
     stopScale('action-impact-large', hsmActionImpactLarge)
     stopScale('hsm__trained', hsmTrained)
     stopScale('hsm__report', hsmReport)
     stopScale('hsm__leaves', hsmLeaves)
     stopScale('hsm__peoples', hsmPeoples)
     stopScale('hsm__check', hsmCheck)
     stopScale('hsm__home', hsmHome)
     stopScale('hsm__woman', hsmWoman)
     stopScale('hsm__woman2', hsmWoman2)
     stopScale('hsm__man', hsmMan)

        function stopScale(className, node) {

          if(el.classList.contains(`${className}`)) {
            node.style.cssText = `transform: initial`;
          }
        }




  })

  }
})()
