import addLoader from '../loader/loader';
import getJSON from '../utils/getjson';
import rusToLat from '../utils/translit';
import errorHandler from '../utils/errorhandler';
import { fillUnit } from '../utils/changeunit';
import { fillWeatherData, fillMeta, fillWithImages } from '../utils/changelang';

const changeBgLogic = () => getJSON('https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=e2077ad31a806c894c460aec8f81bc2af4d09c4f8104ae3177bb809faf0eac17')
  .then((result) => { window.masterObj.elements.bg.src = result.urls.regular; });

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

const changeLangLogic = (language) => {
  const keys = Object.keys(window.masterObj.lang);
  keys.forEach((key) => {
    window.masterObj.lang[key].element.innerHTML = window.masterObj.lang[key][language];
  });
  // костыль
  window.masterObj.elements.search.placeholder = window.masterObj.lang.searchinpt.element.innerHTML;
};

const buttonLangHandler = (event) => {
  setTimeout(() => {
    localStorage.setItem('userLang', event.target.innerHTML);
    const clickedButton = event.target;
    clickedButton.disabled = true;
    changeLangLogic(event.target.innerHTML.toLowerCase());
    clickedButton.disabled = false;
  }, 0);
};

const changeUnitLogic = (unit) => {
  const keys = Object.keys(window.masterObj.unit);
  keys.forEach((key) => {
    window.masterObj.unit[key].element.innerHTML = window.masterObj.unit[key][unit];
  });
};

const buttonUnitHandler = (event) => {
  setTimeout(() => {
    localStorage.setItem('userUnit', event.target.innerHTML);
    const clickedButton = event.target;
    clickedButton.disabled = true;
    changeUnitLogic(event.target.innerHTML);
    clickedButton.disabled = false;
  }, 0);
};

const locationLogic = (location) => {
  window.masterObj.elements.maplon.innerHTML = `${location.lon}° / ${location.lon * 60}′ E`;
  window.masterObj.elements.maplat.innerHTML = `${location.lat}° / ${location.lat * 60}′ N`;
  window.masterObj.elements.mapframe.src = `https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&zoomwheel=false&access_token=pk.eyJ1IjoiYWxtYXpvbi05NSIsImEiOiJja25tdnF4YzEwd2FqMm9wZTVkYW9kMThyIn0.3TivI8Cmoa_f22ocNJDVwg#9/${location.lat}/${location.lon}`;
};

const changeSearchLogic = (location, lang) => getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(location)}&days=3&lang=${encodeURIComponent(lang)}`)
  .then((result) => result,
    () => getJSON(`https://api.weatherapi.com/v1/forecast.json?key=363474e96d194f10ab9212718201105&q=${encodeURIComponent(rusToLat(location))}&days=3&lang=${encodeURIComponent(lang)}`).then((result) => result, errorHandler));

const buttonSearchHandler = (event) => {
  if (!window.masterObj.elements.search.value) return alert('Введите значение');
  let locationName = '';
  const clickedButton = event.target;
  const mapLoader = addLoader(window.masterObj.elements.map);
  window.masterObj.elements.mapframe.src = ''; // не догнал зачем так делать
  const dayLoader = addLoader(window.masterObj.elements.forecastToday);
  const days3Loader = addLoader(window.masterObj.elements.forecastTheeDays);
  clickedButton.disabled = true;
  locationName = window.masterObj.elements.search.value;
  let weatherTmp = '';
  changeSearchLogic(locationName, 'ru')
    .then((weatherForecast) => {
      weatherTmp = weatherForecast;
      window.masterObj.elements.mapframe.onload = () => {
        window.masterObj.elements.map.removeChild(mapLoader);
      };
      locationLogic(weatherForecast.location);
      fillUnit(weatherForecast);
      fillWeatherData(weatherForecast, 'ru');
      return changeSearchLogic(locationName, 'en');
    }, errorHandler)
    .then((weatherForecast) => {
      fillWeatherData(weatherForecast, 'en');
      return weatherForecast.location;
    })
    .then((location) => {
      const promises = [
        getJSON(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=en`)
          .then((result) => { fillMeta(result, 'en'); }, errorHandler),
        getJSON(`https://api.opencagedata.com/geocode/v1/json?key=ce72918744584fb49873a292493d3550&q=${encodeURIComponent(`${location.lat},${location.lon}`)}&pretty=1&no_annotations=1&language=ru`)
          .then((result) => { fillMeta(result, 'ru'); }, errorHandler)];
      return Promise.allSettled(promises);
    }, errorHandler)
    .then(() => {
      fillWithImages([
        weatherTmp.current.condition.icon,
        weatherTmp.forecast.forecastday[0].day.condition.icon,
        weatherTmp.forecast.forecastday[1].day.condition.icon,
        weatherTmp.forecast.forecastday[2].day.condition.icon,
      ], () => {
        window.masterObj.elements.forecastToday.removeChild(dayLoader);
        window.masterObj.elements.forecastTheeDays.removeChild(days3Loader);
        changeUnitLogic(localStorage.getItem('userUnit'));
        changeLangLogic(localStorage.getItem('userLang').toLowerCase());
      });
      clickedButton.disabled = false;
    });
  return 'something';
};

export {
  changeBgLogic,
  buttonBgHandler,
  buttonSearchHandler,
  changeUnitLogic,
  buttonUnitHandler,
  changeLangLogic,
  buttonLangHandler,
  locationLogic,
};
