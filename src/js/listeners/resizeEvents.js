import throttle from 'lodash.throttle';

export const resizeEvents = () => {
  const init = () => {};

  init();

  window.addEventListener('resize', throttle(init, 100));
};
