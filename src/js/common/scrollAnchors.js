import { rect } from '../../js/common/rect';
window.navScroll = false;

let navScrollTimer;

function delayHeaderHiding() {
  navScrollTimer = setTimeout(() => {
    window.navScroll = false;
  }, 2000);
}

export const scrollAnchors = () => {
  let $anchors = document.querySelectorAll('[data-anchor]');
  const $header = document.getElementById('header');
  if (!$anchors || !$header) {
    return;
  }

  $anchors = Array.prototype.slice.call($anchors);

  $anchors.forEach($anchor => {
    $anchor.addEventListener('click', e => {
      e.preventDefault();
      const attr = $anchor.getAttribute('data-anchor');
      const scrollTo = document.getElementById(attr);
      clearTimeout(navScrollTimer);
      window.navScroll = true;

      delayHeaderHiding();

      // setTimeout for closing modal
      setTimeout(() => {
        try {
          window.scrollTo({
            top: rect(scrollTo).top - 30,
            behavior: 'smooth',
          });
        } catch (e) {
          window.scrollTo(0, rect(scrollTo).top - 30);
        }
      }, 100);
    });
  });
};
