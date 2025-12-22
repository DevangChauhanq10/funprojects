//git
document.addEventListener("DOMContentLoaded", () => {
  // Cache DOM elements
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-button");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  // OpenWeatherMap API key
  const API_KEY = "e674330b91e1056664da6ee21faf4ddb";

  // Handle weather fetch on button click
  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError();
    }
  });

  // Fetch current weather data for a given city
  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const responseIGot = await fetch(url);

    if (!responseIGot.ok) {
      throw new Error("City not found");
    }

    return await responseIGot.json();
  }
  // Update UI with fetched weather data
  function displayWeatherData(data) {
    const { name, main, weather } = data;

    cityNameDisplay.textContent = name;
    temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
    description.textContent = `Weather: ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }
  // Display error state in UI
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});

//understanding
document.addEventListener("DOMContentLoaded", () => {
  // DOMContentLoaded ensures that the entire HTML is loaded
  // before JavaScript tries to access or manipulate DOM elements

  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-button");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  // All getElementById calls are DOM operations
  // They convert HTML elements into JavaScript objects

  const API_KEY = "e674330b91e1056664da6ee21faf4ddb";
  // API key is stored in browser memory (BOM environment)

  getWeatherButton.addEventListener("click", async () => {
    // added async so we can use await later
    // click is a DOM event triggered by user interaction

    const city = cityInput.value.trim();
    // as soon as some1 clicks on button i need to grab cityinput data
    // .value reads data from input element (DOM property)
    // .trim() removes unnecessary spaces

    if (!city) return;
    // if there no input just return ie nothing happens
    // prevents unnecessary API calls

    // it may throw an error
    // server/database is always in another continent
    // network operations are unpredictable and slow

    try {
      const weatherData = await fetchWeatherData(city);
      // execution pauses here until fetchWeatherData resolves

      displayWeatherData(weatherData);
      // updates the UI using DOM manipulation
    } catch (error) {
      showError();
      // handles any network / API / logic error safely
    }
  });

  async function fetchWeatherData(city) {
    // created a function fetchWeatherData in which we will provide a city name
    // function is async because fetch() and json() are asynchronous

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // URL contains query params sent to server
    // This is a BOM-based network request

    const responseIGot = await fetch(url);
    // fetch() belongs to BOM (Browser Object Model)
    // await waits for server response

    //console.log(responseIGot);

    if (!responseIGot.ok) {
      // ok checks HTTP status (200–299 = success)
      throw new Error("City not found");
      // manually throwing error so try-catch can handle it
    }

    const data = await responseIGot.json();
    // converts raw HTTP response into JS object

    return data;
    // returns parsed weather data to caller
  }

  function displayWeatherData(data) {
    console.log(data);
    // logging full API response for debugging & learning

    const { name, main, weather } = data;
    // destructuring object for clean access

    cityNameDisplay.textContent = name;
    // DOM text update

    temperatureDisplay.textContent = `Temperature : ${main.temp}°C`;
    // main.temp comes from API response

    description.textContent = `Weather : ${weather[0].description}`;
    // weather is an array, first element contains description

    weatherInfo.classList.remove("hidden");
    // show weather section

    errorMessage.classList.add("hidden");
    // hide error message if previously shown
  }

  function showError() {
    // UI handling for error state

    weatherInfo.classList.add("hidden");
    // hide weather info on error

    errorMessage.classList.remove("hidden");
    // show error message
  }
});
