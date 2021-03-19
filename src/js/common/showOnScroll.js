import { isVisible } from './isVisible';

export const showOnScroll = () => {
  const boxes = document.querySelectorAll('[show-onscroll]');
  if (!boxes) {
    return;
  }

  boxes.forEach(el => {
    const that = el;

    if (isVisible(that)) {
      that.classList.add('on');
    }
  });
};
