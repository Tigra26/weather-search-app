export function getCityCoordinates(cityName) {
 return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=95632b02f9162f375a368971925f5209`)
 .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
}

export function getWeatherByCityName(lat, lon) {
  return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=95632b02f9162f375a368971925f5209&units=metric`)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
}