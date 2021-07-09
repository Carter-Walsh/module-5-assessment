const axios = require("axios");
require("dotenv").config({path: "../../../.env"});

module.exports = {
    compliment: (req, res) => {
        const compliments = [
            "Gee, you're a smart cookie!", 
            "Cool shirt!", 
            "Your Javascript skills are stellar."
        ];

        let randomIndex = randomNumber(compliments);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);
    },
    fortune: (req, res) => {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "A dubious friend may be an enemy in camouflage.",
            "A faithful friend is a strong defense.",
            "A golden egg of opportunity falls into your lap this month.",
            "An acquaintance of the past will affect you in the near future."
        ];

        let randomIndex = randomNumber(fortunes);
        let randomFortune = fortunes[randomIndex];
        res.status(200).send(randomFortune);
    },
    journalEntry: (req, res) => {
        const newEntry = req.body.entry;
        res.status(200).send(newEntry);
    },
    getWeather: (req, res) => {
        let city = req.params.city;
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(err => {
            console.log({error: err});
            res.status(400).send("Could not find the data you were looking for");
        });
    }
}

const randomNumber = (arr) => {
    return Math.floor(Math.random() * arr.length);
}