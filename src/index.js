//homework 5
function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#searchCity-input");
  let currentCity = document.querySelector("h1");

  currentCity.innerHTML = `${cityInput.value}`;
  retrieveWeather(cityInput.value);
}
let searchForm = document.querySelector("#searchCityForm");
searchForm.addEventListener("submit", enterCity);

function retrieveWeather(city) {
  let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
}

function getLocation(position) {
  let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
  let unit = "metric";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${unit}&appid=${apiKey}`;
  axios.get(apiURL).then(showTemperature);
}

let currentLocationButton = document.querySelector("#current-city-btn");
currentLocationButton.addEventListener("click", getPosition);
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getLocation);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentCity = document.querySelector("h1");
  let temperatureElement = document.querySelector("#temp");

  currentCity.innerHTML = response.data.name;
  temperatureElement.innerHTML = temperature;
}

//homework 4
let currentTime = new Date();
let currentDayandTime = document.querySelector("h3");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let hours = currentTime.getHours();
if (hours < 10) {
  hours = `0 ${hours}`;
}
let minutes = currentTime.getMinutes();
if (minutes < 10) {
  minutes = `0 ${minutes}`;
}
let currentDay = days[currentTime.getDay()];
currentDayandTime.innerHTML = `${currentDay}  ${hours}:${minutes}`;

function searchCurrentTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = city.value;
}

let form = document.querySelector("#searchCityForm");
form.addEventListener("submit", searchCurrentTemp);

function convertToC() {
  document.getElementById("current-temperature").innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-icon");
celsiusLink.addEventListener("click", convertToC);
function convertToF() {
  document.getElementById("current-temperature").innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-icon");
fahrenheitLink.addEventListener("click", convertToF);