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
})();

(function() {
  // console.log('2');
  // const video = document.querySelector('.video');
  // const videoBtn = document.querySelector('.video__btn');
  // videoBtn.addEventListener('click', function() {

  //   // 2. This code loads the IFrame Player API code asynchronously.
  //   var tag = document.createElement('script');

  //   tag.src = "https://www.youtube.com/iframe_api";
  //   var firstScriptTag = document.getElementsByTagName('script')[0];

  //   console.log(firstScriptTag.parentNode);
  //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //   // 3. This function creates an <iframe> (and YouTube player)
  //   //    after the API code downloads.
  //   var player;

  //   function onYouTubeIframeAPIReady() {
  //     player = new YT.Player('video__player', {
  //       height: '360',
  //       width: '640',
  //       videoId: 'M7lc1UVf-VE',
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       }
  //     });
  //   }

  //   // 4. The API will call this function when the video player is ready.
  //   function onPlayerReady(event) {
  //     event.target.playVideo();
  //   }

  //   // 5. The API calls this function when the player's state changes.
  //   //    The function indicates that when playing a video (state=1),
  //   //    the player should play for six seconds and then stop.
  //   var done = false;

  //   function onPlayerStateChange(event) {
  //     if (event.data == YT.PlayerState.PLAYING && !done) {
  //       setTimeout(stopVideo, 6000);
  //       done = true;
  //     }
  //   }

  //   function stopVideo() {
  //     player.stopVideo();
  //   }

  // })


})()