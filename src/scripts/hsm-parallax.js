(function(){
  console.log('hsm /manage parallax');

    const layers = document.querySelectorAll(".layer");

  if (layers) {


    const parallaxEffect = (e) => {
      const positionX = e.clientX - Math.floor(window.innerWidth / 2);
      const positionY = e.clientY - Math.floor(window.innerHeight / 2);

      layers.forEach((layer, i) => {


        layer.style.transform = `translate(${positionX * (2 / 100)}%,${positionY * (2 / 100)}% )`;

      });
    };

    document.addEventListener("mousemove", parallaxEffect);

  }
})();
