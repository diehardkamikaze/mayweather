const avgTemperatureArray = document.querySelectorAll('.average-temperature');

function getUnitObj() {
  return {
    unitbutton: {
      element: window.masterObj.buttons.unit,
      C: 'F',
      F: 'C',
    },
    currentTemperature: {
      element: document.querySelector('.current-temperature'),
      C: '12 C',
      F: '15 F',
    },
    apparentTemparature: {
      element: document.querySelector('.apparent-temparature'),
      C: '',
      F: '',
    },
    averageTemperatureDay1: {
      element: avgTemperatureArray[0],
      C: '',
      F: '',
    },
    averageTemperatureDay2: {
      element: avgTemperatureArray[1],
      C: '',
      F: '',
    },
    averageTemperatureDay3: {
      element: avgTemperatureArray[2],
      C: '',
      F: '',
    },
  };
}

function fillUnit(forecast) {
  const tmp = window.masterObj.unit;
  const forecastDay = forecast.forecast.forecastday;
  const currentHour = new Date().getHours();
  tmp.currentTemperature.C = `${forecastDay[0].hour[currentHour].temp_c} °C`;
  tmp.currentTemperature.F = `${forecastDay[0].hour[currentHour].temp_f} °F`;
  tmp.apparentTemparature.C = `${forecastDay[0].hour[currentHour].feelslike_c} °C`;
  tmp.apparentTemparature.F = `${forecastDay[0].hour[currentHour].feelslike_f} °F`;
  tmp.averageTemperatureDay1.C = `${forecastDay[0].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay1.F = `${forecastDay[0].day.avgtemp_f} °F`;
  tmp.averageTemperatureDay2.C = `${forecastDay[1].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay2.F = `${forecastDay[1].day.avgtemp_f} °F`;
  tmp.averageTemperatureDay3.C = `${forecastDay[2].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay3.F = `${forecastDay[2].day.avgtemp_f} °F`;
}

export { getUnitObj, fillUnit };
