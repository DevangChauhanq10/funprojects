document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-button");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  // OpenWeatherMap API key
  const API_KEY = "Enter your OpenWeather API key";

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
  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
