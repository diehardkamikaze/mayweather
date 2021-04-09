import getJSON from '../api/getjson';

const changeBgLogic = (elem) => new Promise((resolve) => {
  console.log(elem);
  const te = new Image();
  te.onload = () => { window.masterObj[elem].style.backgroundImage = `url("${te.src}")`; resolve(1); };
  getJSON('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17')
    .then((result) => { te.src = result.urls.regular; });
});

const changeLangLogic = () => {
  console.log('coming soon');
};

const changeUnitLogic = () => {
  console.log('coming soon');
};

export { changeBgLogic, changeLangLogic, changeUnitLogic };
