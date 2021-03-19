(() => {
  let active = 0;
  const tabs = document.querySelectorAll('.tabs__tab');
  const tabsContentList = document.querySelectorAll('.tabs__content-inner');
  if (!tabs.length || !tabsContentList.length) return;

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();

      active = index;
      tabs.forEach((el) => el.classList.remove('tabs__tab--active'));
      tab.classList.add('tabs__tab--active');

      tabsContentList.forEach((el) => el.classList.remove('tabs__content-inner--active'));
      tabsContentList[active].classList.add('tabs__content-inner--active');
    });
  });
})();
