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
  tmp.currentTemperature.C = `${forecast.current.temp_c} °C`;
  tmp.currentTemperature.F = `${forecast.current.temp_f} °F`;
  tmp.apparentTemparature.C = `${forecast.current.feelslike_c} °C`;
  tmp.apparentTemparature.F = `${forecast.current.feelslike_f} °F`;
  tmp.averageTemperatureDay1.C = `${forecast.forecast.forecastday[0].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay1.F = `${forecast.forecast.forecastday[0].day.avgtemp_f} °F`;
  tmp.averageTemperatureDay2.C = `${forecast.forecast.forecastday[1].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay2.F = `${forecast.forecast.forecastday[1].day.avgtemp_f} °F`;
  tmp.averageTemperatureDay3.C = `${forecast.forecast.forecastday[2].day.avgtemp_c} °C`;
  tmp.averageTemperatureDay3.F = `${forecast.forecast.forecastday[2].day.avgtemp_f} °F`;
}

export { getUnitObj, fillUnit };
