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

new Swiper(".clients-swiper", {
  modules: [Autoplay],
  slidesPerView: 3,
  loop: true,
  spaceBetween: 16,
  width: 508 + 508 + 508 + 16 + 16,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
});
