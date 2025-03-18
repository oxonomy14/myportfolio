import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

const elemSkillsBtnNext = document.querySelector('.skills-arrow-next');

const swiperSkills = new Swiper('.swiperr', {
    speed: 400,
  easing: 'ease-in-out',
  loop: true,

  modules: [Navigation],
  navigation: {
    nextEl: '.skills-arrow-next',
  },
  slidesPerView: 2,
  spaceBetween: 0,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },

    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

window.addEventListener('keydown', evt => {
  if (evt.code === 'ArrowRight') {
    swiperSkills.slideNext();
  }
});

const accordionParams = {
  openOnInit: [0],
  duration: 400,
  toggle: 'click',
  easing: 'ease-in-out',
  scrollTo: true,
};

new Accordion('.content-container', accordionParams);
