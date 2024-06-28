// core version + navigation, pagination modules:
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

new Swiper(".partners-swiper", {
  modules: [Autoplay],
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});

new Swiper(".testimonials-swiper", {
  modules: [Autoplay],
  loop: true,
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 32,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});
