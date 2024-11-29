class Weather {
    constructor(city, temp, descriptions) {
        this.city = city;
        this.temp = temp;
        this.descriptions = descriptions;
    }

    getDetails() {
        return `Weather in ${this.city}: ${this.temp}°C, ${this.descriptions.join(", ")}`;
    }
}
const weatherData = (data) => {
    return data.weather.map(item => item.description);
};
function updateDom(weather) {
    const weatherDiv = document.getElementById("weatherDisplay");
    weatherDiv.innerHTML = `
        <h2>${weather.city}</h2>
        <p>Temperature: ${weather.temp}°C</p>
        <p>Description: ${weather.descriptions.join(", ")}</p>
        <p>The cat says: "Meow! The weather is ${weather.descriptions[0]} today!"</p>
    `;
}

function fetchWeatherData(city) {
   const mockData = {
        weather: [
            { description: "clear sky" },
            { description: "few clouds" }
        ],
        main: {
            temp: 22
        },
        name: city
    };

    const descriptions = weatherData(mockData);
    const weather = new Weather(mockData.name, mockData.main.temp, descriptions);
    updateDom(weather);
}

document.getElementById("getWeather").addEventListener("click", () => {
    const city = prompt("Enter a city:");
    if (city) {
        fetchWeatherData(city);
    }
});
