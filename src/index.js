import './styles.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import addLoader from './loader/loader';
import getJSON from './utils/getjson';
import { changeBgLogic, buttonBgHandler, buttonSearchHandler } from './buttons_handlers/buttons_handler';

const zZ = addLoader(document.body);
window.masterObj = {
  bg_img: '',
};

function initAll() {
  if (!localStorage.getItem('userParams')) localStorage.setItem('userParams', { lang: 'ru', unit: 'c' });

  window.masterObj.lang = {};
  window.masterObj.lang.city = {
    obj: document.querySelector('.city'),
    en: '',
    ru: '',
  };
  window.masterObj.lang.country = {
    obj: document.querySelector('.country'),
    en: '',
    ru: '',
  };

  /* interface elements */
  window.masterObj.elements = {};
  window.masterObj.elements.bg = document.querySelector('.background');
  window.masterObj.elements.map = document.querySelector('.location-info');
  window.masterObj.elements.forecastToday = document.querySelector('.forecast-for-today');
  window.masterObj.elements.forecastTheeDays = document.querySelector('.thee-days-forecast');

  /* control block elements */
  window.masterObj.buttons = {};
  window.masterObj.buttons.bg = document.querySelector('.change-bg');
  window.masterObj.buttons.unit = document.querySelector('.change-unit');
  window.masterObj.buttons.lang = document.querySelector('.change-lang');
  window.masterObj.buttons.search = document.querySelector('.search-go');

  window.masterObj.elements.search = document.querySelector('#search-input');

  /* add event listeners */
  window.masterObj.buttons.bg.addEventListener('click', buttonBgHandler);
  window.masterObj.buttons.search.addEventListener('click', buttonSearchHandler);
  /* init bg */
  changeBgLogic();

  /* get location and weatherForecast  */
  getJSON('http://ipinfo.io/?token=8f1769cb9f55d9')
    .then((userLocation) => {
      window.masterObj.lang.city.en = userLocation.city;
      window.masterObj.lang.country.en = userLocation.country;
      return getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${userLocation.city}&days=3`);
    }).then((weatherForecast) => {
      console.log(weatherForecast);
    });
  /* get map */
}

initAll();

setTimeout(() => { document.body.removeChild(zZ); }, 1000);
