export const rect = elem => {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    topFixed: box.top,
    bottom: box.bottom + pageYOffset,
    bottomFixed: box.bottom,
    left: box.left + pageXOffset,
    right: box.right + pageXOffset,
    height: box.height,
    width: box.width,
  };
};
