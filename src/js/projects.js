import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const swiperProject = new Swiper('.swiperrr', {
  modules: [Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  speed: 900,
  spaceBetween: 400,

  touchRatio: 1,
  allowTouchMove: true,

  navigation: {
    nextEl: '.swiper-project-btn-next',
    prevEl: '.swiper-project-btn-prev',
  },
});

document.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiperProject.slideNext();
  } else if (evt.code === 'ArrowLeft') {
    swiperProject.slidePrev();
  }
});
