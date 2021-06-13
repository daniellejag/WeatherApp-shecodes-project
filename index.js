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



//test
function citySearch(event) {
  event.preventDefault();
  let citySearch = document.querySelector("#city-search");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = citySearch.value;

  searchCity(citySearch.value);
}


//let form = document.querySelector("#searchCityForm");
//form.addEventListener("submit", searchCurrentTemp);

function searchCity(city) {
  let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

let searchForm = document.querySelector("#searchCityForm");
searchForm.addEventListener("submit", searchCurrentTemp);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  console.log(response);
  let city = response.data.name;
  let h1 = document.querySelector("h1");
  let todaysTemp = document.querySelector("#temp");
  h1.innerHTML = `${city}`;
  todaysTemp.innerHTML = `${temperature}ºc`;
}

function searchLocation(position) {
  let apiKey = "b3a8312e8813d91f8ac0edd65adaa9c3";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(showTemperature);
}

//current location button
function getPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
document
  .querySelector("#current-location")
  .addEventListener("click", getPosition);

searchCity("Corfu")

//test



function convertToC() {

  document.getElementById("current-temperature").innerHTML = 29;
}
let celsiusLink = document.querySelector("#celsius-icon");
celsiusLink.addEventListener("click", convertToC);
function convertToF() {
  document.getElementById("current-temperature").innerHTML = 79;
}
let fahrenheitLink = document.querySelector("#fahrenheit-icon");
fahrenheitLink.addEventListener("click", convertToF);