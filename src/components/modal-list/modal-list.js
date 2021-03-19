const toggleModal = () => {
  const $burger = document.querySelector('#burger');
  const $modal = document.querySelector('#modalList');
  if (!$burger || !$modal) return;

  $burger.addEventListener('click', (e) => {
    e.preventDefault();

    $burger.classList.add('burger--active');
    $modal.classList.add('modal-list--active');
  });

  const $modalCloseBtn = $modal.querySelector('.modal-list__close');
  if (!$modalCloseBtn) return;

  $modalCloseBtn.addEventListener('click', (e) => {
    e.preventDefault();

    $burger.classList.remove('burger--active');
    $modal.classList.remove('modal-list--active');
  });
};

toggleModal();
