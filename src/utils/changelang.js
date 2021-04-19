const imageObj = document.querySelectorAll('.weather-icon');
const days = document.querySelectorAll('.forecast-list li');

function getTranslateObj() {
  return {
    /* static */
    bgbutton: {
      element: window.masterObj.buttons.bg,
      ru: 'Сменить фон очередной раз',
      en: 'Change the background again',
    },
    langbutton: {
      element: window.masterObj.buttons.lang,
      ru: 'EN',
      en: 'RU',
    },
    searchbutton: {
      element: window.masterObj.buttons.search,
      ru: 'Поиск',
      en: 'Search',
    },
    searchinpt: {
      element: { innerHTML: '' },
      ru: 'Введите местоположение',
      en: 'Enter location',
    },
    cityheader: {
      element: document.querySelector('.city-head'),
      ru: 'Город:',
      en: 'City:',
    },
    countryheader: {
      element: document.querySelector('.country-head'),
      ru: 'Страна:',
      en: 'Country:',
    },
    datehead: {
      element: document.querySelector('.date-head'),
      ru: 'Дата:',
      en: 'Date:',
    },
    timehead: {
      element: document.querySelector('.time-head'),
      ru: 'Время:',
      en: 'Time:',
    },
    currenttemperaturehead: {
      element: document.querySelector('.current-temperature-head'),
      ru: 'Текущая температура:',
      en: 'Current temperature:',
    },
    apparenttemparaturehead: {
      element: document.querySelector('.apparent-temparature-head'),
      ru: 'По ощущению:',
      en: 'Apparent temparature:',
    },
    windspeedhead: {
      element: document.querySelector('.wind-speed-head'),
      ru: 'Скорость ветра:',
      en: 'Wind Speed:',
    },
    humidityhead: {
      element: document.querySelector('.humidity-head'),
      ru: 'Влажность:',
      en: 'Humidity:',
    },
    longitude: {
      element: document.querySelector('.longitude b'),
      ru: 'Долгота:',
      en: 'Longitude:',
    },
    latitude: {
      element: document.querySelector('.latitude b'),
      ru: 'Широта:',
      en: 'Latitude:',
    },
    /* dynamic */
    city: {
      element: document.querySelector('.city'),
      ru: '',
      en: '',
    },
    country: {
      element: document.querySelector('.country'),
      ru: '',
      en: '',
    },
    date: {
      element: document.querySelector('.date'),
      ru: '',
      en: '',
    },
    windspeed: {
      element: document.querySelector('.wind-speed'),
      ru: '',
      en: '',
    },
    humidity: {
      element: document.querySelector('.humidity'),
      ru: '',
      en: '',
    },
    weathersummary: {
      element: document.querySelector('.weather-summary'),
      ru: '',
      en: '',
    },
    day1: {
      element: days[0].querySelector('.day'),
      ru: '',
      en: '',
    },
    day1summary: {
      element: days[0].querySelector('.day-summary'),
      ru: '',
      en: '',
    },
    day2: {
      element: days[1].querySelector('.day'),
      ru: '',
      en: '',
    },
    day2summary: {
      element: days[1].querySelector('.day-summary'),
      ru: '',
      en: '',
    },
    day3: {
      element: days[2].querySelector('.day'),
      ru: '',
      en: '',
    },
    day3summary: {
      element: days[2].querySelector('.day-summary'),
      ru: '',
      en: '',
    },
  };
}

function fillWeatherData(forecast, language) {
  const options = {
    month: 'long', weekday: 'long', day: '2-digit', hour12: false,
  };
  const tmp = window.masterObj.lang;
  const fDay = forecast.forecast.forecastday;
  const currentHour = new Date().getHours();
  tmp.humidity[language] = `${fDay[0].hour[currentHour].humidity} %`;
  tmp.windspeed[language] = (fDay[0].hour[currentHour].wind_kph / 3.6).toFixed(2) + (language === 'ru' ? ' м/c' : ' mps');
  tmp.weathersummary[language] = fDay[0].hour[currentHour].condition.text;

  tmp.day1[language] = new Date(fDay[0].date).toLocaleTimeString(language, options).slice(0, -10);
  tmp.day1summary[language] = fDay[0].day.condition.text;
  tmp.day2[language] = new Date(fDay[1].date).toLocaleTimeString(language, options).slice(0, -10);
  tmp.day2summary[language] = fDay[1].day.condition.text;
  tmp.day3[language] = new Date(fDay[2].date).toLocaleTimeString(language, options).slice(0, -10);
  tmp.day3summary[language] = fDay[2].day.condition.text;
}

function fillMeta(location, language) {
  const tmp = window.masterObj.lang;
  const options = {
    month: 'long', weekday: 'short', day: '2-digit', hour12: false,
  };
  tmp.city[language] = location.results[0].components.city;
  tmp.country[language] = location.results[0].components.country;
  tmp.date[language] = new Date().toLocaleTimeString(language, options).slice(0, -10);
}

function fillWithImages(images, done) {
  const promises = [];
  for (let i = 0; i < images.length; i += 1) {
    promises.push(new Promise((resolve, reject) => {
      imageObj[i].onload = () => resolve(1);
      imageObj[i].onerror = (error) => reject(error);
    }));
    imageObj[i].src = images[i];
  }
  Promise.allSettled(promises).then(done);
}

export {
  getTranslateObj, fillWeatherData, fillMeta, fillWithImages,
};
