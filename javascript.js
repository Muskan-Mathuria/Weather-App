const apiKey = "4cef5b5d22e040d84047a2d9e9a226c4"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherCard = document.getElementById("weatherCard");
      weatherCard.innerHTML = `
        <h2>${data.name}</h2>
        <p class="temperature">${data.main.temp}°C</p>
        <p class="description">${data.weather[0].description}</p>
        <p class="details">Humidity: ${data.main.humidity}% | Wind: ${data.wind.speed} km/h</p>
      `;
      weatherCard.style.display = "block";
    })
    .catch(error => {
      alert(error.message);
    });
}
