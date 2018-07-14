import axios from 'axios';

const API_KEY = '3d704fef089101172a49c1bb078e53ac';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}