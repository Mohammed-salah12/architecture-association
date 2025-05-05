// Initialize Swiper
var swiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  resistanceRatio: 0.7,
  touchAngle: 45,
  followFinger: false,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    waitForTransition: true,
  },
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 1,
    momentumBounce: true,
    momentumVelocityRatio: 0.5,
  },
});
