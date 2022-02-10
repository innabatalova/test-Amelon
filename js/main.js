//инициализация слайдера

$(function () {
  $(".question-slider").owlCarousel();
});

//адаптив слайдера

$(".question-slider").owlCarousel({
  items: 4,
  margin: 23,
  loop: true,
  nav: true,
  navContainer: ".question-slider-navigation",
  navText: [
    "<img src='images/nav-arrow.svg'>",
    "<img src='images/nav-arrow.svg'>",
  ],
});

console.log("test");
