export const toggleClassOnClick = (className) => {
  const $elements = [...document.querySelectorAll(className)];
  if ($elements.length === 0) return;

  $elements.forEach(($element) => {
    $element.addEventListener('click', (e) => {
      e.preventDefault();
      $element.classList.toggle('on');
    });
  });
};
