//инициализация слайдера

$(function () {
  $(".question-slider").owlCarousel();
});

//адаптив слайдера

$(".question-slider").owlCarousel({
  items: 1,
  margin: 23,
  loop: true,
  nav: true,
  navContainer: ".question-slider-navigation",
  navText: [
    "<img src='images/nav-arrow.svg'>",
    "<img src='images/nav-arrow.svg'>",
  ],

  responsive: {
    576: {
      items: 2,
      margin: 23,
    },

    768: {
      items: 3,
      margin: 23,
    },

    992: {
      items: 4,
      margin: 23,
      nav: false,
    },
  },
});

//перенаправка на страницу delivery
let linkDelivery = $(".question-slider__card");

linkDelivery.on("click", function () {
  window.open("delivery.html"); //ссылки на странички категорий
});
