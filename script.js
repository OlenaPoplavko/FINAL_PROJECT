async function fetchCatWeather(city) {
const apiKey = "22727526a506ea47e27801a1caf21008";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(apiUrl);
const data = await response.json();
return data;
}
  function getCatImage(description) {
    const catImages = {
        "clear sky":"",
        "few clouds":"",
        "rain":"",
        "snow":"",
        "default":""
    };
    return catImages[description]|| catImages["default"];
  };
document.getElementById("catGetWeather").addEventListener("click", async function() {
    const catCityInput = document.getElementById("catCityName").value.trim();
    const weatherData = await fetchCatWeather(catCityInput);
 const catImageUrl = getCatImage(weatherData.weather[0].description);

document.getElementById("catWeatherDisplay").innerHTML = 
`<h2>Weather in ${weatherData.name}</h2>
<p>Temperature: ${weatherData.main.temp}°C</p>
<p>Description: ${weatherData.weather[0].description}</p>
<img src="${catImageUrl}" alt="Weather Cat" style="max-width: 300px; border-radius: 10px;"/>`;    

});