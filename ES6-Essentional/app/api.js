// import API_KEY from "../API_KEY/api";
const API_KEY = "Add API KEY";

const fetchWeather = city => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${city}&units=metric`
  ).then(response => response.json());
};

export default fetchWeather;
