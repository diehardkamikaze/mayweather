import getJSON from '../api/getjson';

const changeBgLogic = () => getJSON('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17')
  .then((img) => { window.masterObj.bg_img.style.backgroundImage = `url("${img.links.download}")`; return 1; });

const changeLangLogic = () => {
  console.log('coming soon');
};

const changeUnitLogic = () => {
  console.log('coming soon');
};

export { changeBgLogic, changeLangLogic, changeUnitLogic };
