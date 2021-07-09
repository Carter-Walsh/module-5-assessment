const complimentButton = document.getElementById("complimentButton");
const fortuneButton = document.getElementById("fortuneButton");
const starwarsButton = document.getElementById("starwarsButton");
const starWarsContainer = document.getElementById("starWarsContainer");
const journalContainer = document.getElementById("journalContainer");
const weatherContainer = document.getElementById("weatherContainer");
const journalForm = document.getElementById("journalForm");
const weatherForm = document.getElementById("weatherForm");

const baseURL = "http://localhost:4000/api"
const starWarsBase = "https://swapi.dev/api"
const openWeatherBase = "api.openweathermap.org/data/2.5/weather"

complimentButton.onclick = () => {
    axios.get(`${baseURL}/compliment`)
        .then(res => {
          alert(res.data);
        });
  };

fortuneButton.onclick = () => {
    axios.get(`${baseURL}/fortune`)
        .then(res => {
            alert(res.data);
        });
};

starwarsButton.onclick = () => {
    axios.get(`${starWarsBase}/people/${randomNumber()}`)
        .then(res => {
            displayStarWars(res.data.name);
        })
        .catch(err => {
            console.log({error: err});
        });
};

journalForm.onsubmit = (event) => {
    event.preventDefault();

    let entry = document.getElementById("entry");
    let bodyObj = {
        entry: entry.value
    }

    axios.post(`${baseURL}/journal`, bodyObj)
        .then(res => {
            displayJournalEntry(res.data);
        })
        .catch(err => {
            console.log({error: err});
        });

        entry.value = "";
}

weatherForm.onsubmit = (event) => {
    event.preventDefault();

    let city = document.getElementById("city");
    
    axios.get(`api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=apikey`)
        .then(res => {
            console.log(res.data);
            displayWeather(res.data.weather.description);
        })
        .catch(err => {
            console.log({error: err});
        });

        city.value = "";
}

const randomNumber = () => {
    return Math.floor(Math.random() * 82);
}

const displayStarWars = (person) => {
    const starWarsCard = document.createElement("div");
    starWarsCard.innerHTML = `<h2>${person}</h2>`;
    starWarsContainer.appendChild(starWarsCard);
};

const displayJournalEntry = (entry) => {
    const journalEntry = document.createElement("div");
    journalEntry.innerHTML = `<h2>${entry}`;
    journalContainer.appendChild(journalEntry);
};

const displayWeather = (weather) => {
    const weatherEntry = document.createElement("div");
    weatherEntry.innerHTML = `<h2>${weather}</h2>`
    weatherContainer.appendChild(weatherEntry);
};