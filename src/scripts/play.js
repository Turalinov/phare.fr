(function() {

  const play = document.getElementById('video__btn');

  if (play) {


    var options = {
      url: "https://player.vimeo.com/video/644759142?h=0da22ba5bc",
      width: '100%',
      responsive: true,
      maxheight: 630
    };

    var videoPlayer = new Vimeo.Player('video__player', options);




    videoPlayer.on('play', function() {
      console.log('Played the video');
    });




    const preview = document.getElementById('video__preview');
    const player = document.getElementById('video__player');

    play.addEventListener('click', function(e) {

      if (!preview.classList.contains('video__preview--hide')) {
        preview.classList.add('video__preview--hide');
        player.classList.add('video__player--showed');
        videoPlayer.play();
      }



    })

    videoPlayer.on('pause', function() {
      console.log('Paused the video');
      preview.classList.remove('video__preview--hide');
      player.classList.remove('video__player--showed');
    });




  }




})();
