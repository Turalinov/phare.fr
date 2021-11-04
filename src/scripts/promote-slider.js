(function () {
    //Инициализируем слайдер
  console.log('promote-slider');
new Swiper('.promote-slider', {
  //Стрелки
  navigation: {
    nextEl: '.promote-slider__button-next', //тут можем задать свои - в одних из блоков будут
    prevEl: '.promote-slider__button-prev',
  },
  //Навигация

  // Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.promote-slider__pagination',


    // // 1 тип: буллеты
    // type: 'bullets', //по умолчанию
    // clickable: true,
    // // динамические буллеты
    // dynamicBullets: true,
    // //кастомные буллеты
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // }

    //2 тип. фракция
    type: 'fraction',
    //кастомный вывод фракции
    // renderFraction: function (currentClass, totalClass) {
    //   return 'Слайдер <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
    // }

    //3 тип. прогрессбар сверху
    // type: 'progressbar',

  },

  //скролл
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   //возможность перетаскивать скролл
  //   draggable: true
  // },

  //свайпы
  //включение / отключение перетаскивания на ПК
  // simulateTouch: true, //false если нужно отключить

  //чувствительность свайпа
  // touchRatio: 1, //0 - отлючает свайпы везде
  //угол срабатывания свайпа
  // touchAngle: 45,
  //курсор перетаскивания
  // grabCursor: true,
  //переключение слайда при клике на него
  // slideToClickedSlide: true,

  // навигация по хешу для каждого слайда нужно задать   data-hash="slide-$"
  // hashNavigation: {
  //   //отслеживать состояние
  //   whatchState: true,
  // },

  //управление клавиатурой
  // keyboard: {
  //   //включить / выключить
  //   enabled: true,
  //   //включить / выключить только тогда когда слайдер в пределах viewport
  //   onlyInViewport: true,
  //   //включить / выключить управление  клавишами pageUp, pageDown
  //   pageUpDown: true,
  // }

  //управление колесом мыши
  // mousewheel: {
  //   //чувствительность колеса мыши
  //   sensitivity: 1,
  //   //класс объекта на котором будет срабатывать прокрутка мышью
  //   eventsTarget: ".possibilities-slider"
  // }

  //автовысота
  // autoHeight: 1,

  //количество слайдеров для показа
  slidesPerView: 'auto', //можно указать два с половиной 2.5 )) // 'auto' - свайпер сам сформирует, тогда с swiper-slide width: auto

  //отключение функционала если слайдов меньше чем указано в slidesPerView
  // whatchOverflow: true,

  //оступ между слайдами
  spaceBetween: 0,

  //количество пролистываемых слайдов
  slidesPerGroup: 1, //изменяет фракцию

  //активный слайд по центру
  centeredSlides: true,

  //стартовый слайд
  // initialSlide: 0, //отсчёт с  0

  //мультирядность
  // slidesPerColumn: 2, //для корректной работы отключить автовысоту а также слайдеру задать height: 700 и сами слайдам height: calc((100% - 30px) /2); overflow:hidden;

  //бесконечный слайдер
  // loop: true,

  //количество дублирующих слайдов для бесконечного слайдера если slidesPerView больше 1
  // loopedSlides: 3,

  //свободный режим
  // freeMode: true,

  //автопрокрутка
  autoplay: {
    //пауза между прокруткой
    delay: 3000,
    //закончить на последнем слайде если отключена бесконечный
    // stopOnLastSlide: false,
    //отключить после ручного переключения
    // disableOnInteraction: false,

  },

  //скорость переключения слайдов
  speed: 800,

  //вертикальный слайдер
  // direction: 'vertical', // для этого нужно установить высоту всему слайдеру

  //эффекты переключения слайдов
  //смена прозрачности
  effect: 'fade',

  //дополнительно к fade
  fadeEffect: {
    //параллельная смена прозрачности
    crossFade: true
  },

    //эффекты переключения слайдов
  //смена прозрачности
  // effect: 'flip',

  // //дополнительно к flip
  // flipEffect: {
  //   //тень
  //   slideShadows: true,
  //   //показ только активного слайда
  //   limitRotation: true,
  // },

      //эффекты переключения слайдов
  //смена прозрачности
  // effect: 'cube', //для этого эффекта нужно ограничить ширину всего слайдера width: 500px

  // //дополнительно к cube
  // cubeEffect: {
  //   //настройки тени
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },



      //эффекты переключения слайдов
  //смена прозрачности
  // effect: 'coverflow',

  // // //дополнительно к coverflow
  // coverflowEffect: {
  //   //угол
  //   rotate: 20,
  //   // наложение
  //   stretch: 50,
  //   // тень
  //   slideShadows: true,

  // },

  //эффекты переключения слайдов
  //стандартный эффект листание
  // effect: 'slide',

  //брекпоинты (adaptive MOBILE FIRST)
  //ширина экрана
  // breakpoints: {
  //   320: {//от 320
  //     slidesPerView: 1,
  //   },
  //   768: {//от 480
  //     slidesPerView: 2,
  //   },
  //   1023: { //от 992
  //     slidesPerView: 3,
  //   }
  // },

  on: {
    init() {
  //остановить при наведении
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

  //возобновить при отведении
      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },

});

})();
