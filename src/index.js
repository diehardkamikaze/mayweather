import './styles.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import addLoader from './loader/loader';
import getJSON from './utils/getjson';
import {
  getTranslateObj, fillWeatherData,
  fillMeta, fillWithImages,
} from './utils/changelang';
import { getUnitObj, fillUnit } from './utils/changeunit';
import {
  changeBgLogic, buttonBgHandler, buttonSearchHandler,
  changeUnitLogic, buttonUnitHandler, changeLangLogic,
  buttonLangHandler, locationLogic,
} from './buttons_handlers/buttons_handler';
import errorHandler from './utils/errorhandler';

const pageLoading = addLoader(document.body);
window.masterObj = {};

function initAll() {
  /* close general loader logic */
  let loaderCounter = 0;
  function dataDone() {
    if (loaderCounter > 2) {
      document.body.removeChild(pageLoading);
    }
    loaderCounter += 1;
    changeUnitLogic(localStorage.getItem('userUnit'));
    changeLangLogic(localStorage.getItem('userLang').toLowerCase());
  }

  /* update actual data */
  const currentTime = new Date();
  const afterHour = new Date(
    currentTime.getFullYear(),
    currentTime.getMonth(),
    currentTime.getDate(),
    currentTime.getHours() + 1,
  );
  function updateData() {
    window.masterObj.buttons.search.click();
    setTimeout(updateData, 60 * 60 * 3600);
  }
  setTimeout(() => {
    updateData();
  }, (afterHour - currentTime));
  /* clock timer */
  setInterval(() => {
    window.masterObj.elements.time.innerHTML = new Date().toLocaleTimeString();
  }, 1000);

  /* interface elements */
  window.masterObj.elements = {};
  window.masterObj.elements.bg = document.querySelector('.background');
  window.masterObj.elements.map = document.querySelector('.location-info');
  window.masterObj.elements.mapframe = document.querySelector('.location-info iframe');
  window.masterObj.elements.maplon = document.querySelector('.longitude span');
  window.masterObj.elements.maplat = document.querySelector('.latitude span');
  window.masterObj.elements.forecastToday = document.querySelector('.forecast-for-today');
  window.masterObj.elements.forecastTheeDays = document.querySelector('.three-days-forecast');

  window.masterObj.elements.time = document.querySelector('.time');

  /* control block elements */
  window.masterObj.buttons = {};
  window.masterObj.buttons.bg = document.querySelector('.change-bg');
  window.masterObj.buttons.unit = document.querySelector('.change-unit');
  window.masterObj.buttons.lang = document.querySelector('.change-lang');
  window.masterObj.buttons.search = document.querySelector('.search-go');

  window.masterObj.elements.search = document.querySelector('#search-input');

  if (!localStorage.getItem('userLang')) localStorage.setItem('userLang', 'ru');
  if (!localStorage.getItem('userUnit')) localStorage.setItem('userUnit', 'C');

  window.masterObj.lang = getTranslateObj();
  window.masterObj.unit = getUnitObj();

  /* add event listeners */
  window.masterObj.buttons.bg.addEventListener('click', buttonBgHandler);
  window.masterObj.buttons.search.addEventListener('click', buttonSearchHandler);
  window.masterObj.buttons.unit.addEventListener('click', buttonUnitHandler);
  window.masterObj.buttons.lang.addEventListener('click', buttonLangHandler);

  /* init bg */
  changeBgLogic().then(dataDone);

  /* get location, then weatherForecast, then   */
  getJSON('https://ipinfo.io/?token=8f1769cb9f55d9')
    .then((userLocation) => getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(userLocation.city)}&days=3&lang=ru`),
      errorHandler)
    .then((weatherForecast) => {
      console.log(weatherForecast);
      locationLogic(weatherForecast.location);
      fillUnit(weatherForecast);
      fillWeatherData(weatherForecast, 'ru');
      fillWithImages([
        weatherForecast.forecast.forecastday[0].hour[new Date().getHours()].condition.icon,
        weatherForecast.forecast.forecastday[0].day.condition.icon,
        weatherForecast.forecast.forecastday[1].day.condition.icon,
        weatherForecast.forecast.forecastday[2].day.condition.icon,
      ], dataDone);
      return getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(weatherForecast.location.name)}&days=3&lang=en`);
    })
    .then((weatherForecast) => {
      fillWeatherData(weatherForecast, 'en');
      return weatherForecast.location;
    }, errorHandler)
    .then((location) => {
      getJSON(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=en`)
        .then((result) => { fillMeta(result, 'en'); dataDone(); }, errorHandler);
      getJSON(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=ru`)
        .then((result) => { fillMeta(result, 'ru'); dataDone(); }, errorHandler);
    });
}

window.masterObj = {
};
document.addEventListener('DOMContentLoaded', initAll);
