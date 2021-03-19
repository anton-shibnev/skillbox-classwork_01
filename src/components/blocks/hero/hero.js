import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

// eslint-disable-next-line no-unused-vars,no-new
new Swiper('.swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'button',
  },
});
