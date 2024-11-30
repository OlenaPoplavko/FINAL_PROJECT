async function fetchCatWeather(city) {
const apiKey = "22727526a506ea47e27801a1caf21008";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

const response = await fetch(apiUrl);
const data = await response.json();
return data;
}
  function getCatImage(description) {
    const catImages = {
        "clear sky":"https://animals.pibig.info/uploads/posts/2023-04/1681529157_animals-pibig-info-p-rizhii-kot-vpered-zhivotnie-krasivo-73.jpg",
        "broken clouds":"https://cojo.ru/wp-content/uploads/2022/12/ryzhaia-koshka-5.webp",
        "rain":"https://i.pinimg.com/736x/26/bc/22/26bc228e17bd2d02dfb5937982ce8d7b.jpg",
        "snow":"https://koshka.top/uploads/posts/2021-11/thumbs/1638278969_13-koshka-top-p-koshka-pervii-sneg-15.png",
        "default":"https://animals.pibig.info/uploads/posts/2023-04/thumbs/1681777505_animals-pibig-info-p-kot-v-zakone-zhivotnie-pinterest-38.jpg"
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
<img src="${catImageUrl}" alt="Weather Cat""/>`;    

});