// import { scrollEvents } from './listeners/scrollEvents';
// import all components
const importAll = (r) => r.keys().forEach(r);

// onload
document.addEventListener('DOMContentLoaded', () => {
  importAll(require.context('../components/', true, /\.js$/));

  // listeners
  // scrollEvents();
});
