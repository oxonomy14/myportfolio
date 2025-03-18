import { fetchReviews } from './portfolio-api.js';
import 'swiper/css';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', async () => {
  let data = await fetchReviews();
  renderReviews(data);
  initSwiper();
});

function renderReviews(reviews) {
  if (!reviews.length) {
    document
      .getElementById('error-message')
      .classList.remove('visually-hidden');
    return;
  }
  let reviewsHtml = '';
  for (let review of reviews) {
    const { avatar_url, author, review: reviewText } = review;
    let reviewHtml = `<li class="swiper-slide reviews-swiper-slide"><img class="reviews-img" src="${avatar_url}" alt="${author}">
                <h3 class="reviews-author">${author}</h3>
                <p class="reviews-reviewText" >${reviewText}</p></li>`;
    reviewsHtml += reviewHtml;
  }
  document.getElementById('reviews-list').innerHTML = reviewsHtml;
}

function initSwiper() {
  const reviewsSwiper = new Swiper('.reviews-swiper', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 16,
    // slidesPerGroup: 1,
    breakpoints: {
      375: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      1440: {
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
    },
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
  });

  document.addEventListener('keydown', event => {
    if (event.code === 'ArrowRight') {
      reviewsSwiper.slideNext();
    }
    if (event.code === 'ArrowLeft') {
      reviewsSwiper.slidePrev();
    }
  });
}
