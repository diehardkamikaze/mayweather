function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  // eslint-disable-next-line no-return-assign
  const listener = () => counter += 1;

  document.addEventListener('click', listener);

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return 'Analytics destroyed';
      }
      return counter;
    },
  };
}

window.analytics = createAnalytics();
