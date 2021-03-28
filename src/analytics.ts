import * as $ from 'jquery';

function createAnalytics() : object {
  let counter = 0;
  let isDestroyed : boolean = false;
  // eslint-disable-next-line no-return-assign
  const listener = () => counter += 1;

  $(document).on('click', listener); 

  return {
    destroy() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },

    getClicks() {
      if (isDestroyed) {
        return `Analytics destroyed. Total clicks = ${counter}`;
      }
      return counter;
    },
  };
}

window['analytics'] = createAnalytics();
