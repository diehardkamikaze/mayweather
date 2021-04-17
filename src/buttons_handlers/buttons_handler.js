import addLoader from '../loader/loader';
import getJSON from '../utils/getjson';
import rusToLat from '../utils/translit';

const changeBgLogic = () => new Promise(((resolve) => {
  getJSON('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17')
    .then((result) => { window.masterObj.elements.bg.src = result.urls.regular; resolve(1); });
}));

const buttonBgHandler = (event) => {
  const clickedButton = event.target;
  const elementLoader = addLoader(document.body);
  clickedButton.disabled = true;
  window.masterObj.elements.bg.onload = () => {
    document.body.removeChild(elementLoader);
  };
  changeBgLogic()
    .then(() => {
      clickedButton.disabled = false;
    });
};
/*
const changeLangLogic

const buttonLangHandler

const changeUnitLogic

const buttonUnitHandler
*/
const changeSearchLogic = (location) => new Promise(((resolve) => {
  getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${location}&days=3`)
    .then((result) => { console.log(result); resolve(1); });
}));

const buttonSearchHandler = (event) => {
  if (!window.masterObj.elements.search.value) return alert('Введите значение');
  let location = '';
  const clickedButton = event.target;
  const elementLoader = addLoader(window.masterObj.elements.map);
  clickedButton.disabled = true;
  location = rusToLat(window.masterObj.elements.search.value);
  changeSearchLogic(location)
    .then(() => {
      clickedButton.disabled = false;
    });
  // где-то позже закрой лоадер
  return 'something';
};

export { changeBgLogic, buttonBgHandler, buttonSearchHandler };
