const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc'); 
const forecastContainer = document.querySelector('#forecast-info');

const lat = 10.49;
const lon = -66.90;
const apiKey = '9f4449dcdfd08d51b5221843e060d8ce'; 

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    if (captionDesc) {
        captionDesc.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
    }
}

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
            
            forecastContainer.innerHTML = dailyData.map(day => {
                const date = new Date(day.dt * 1000);
                return `
                    <div class="forecast-day">
                        <span>${date.toLocaleDateString('en-US', {weekday: 'short'})}: </span>
                        <strong>${Math.round(day.main.temp)}&deg;C</strong>
                    </div>
                `;
            }).join('');
        }
    } catch (error) {
        console.log("forecast error:", error);
    }
}

apiFetch();
getForecast();