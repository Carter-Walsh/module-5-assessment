const express = require("express");
const cors = require("cors");
const { compliment, fortune, journalEntry, getWeather } = require("./controller/control");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", compliment);
app.get("/api/fortune", fortune);
app.get("/api/weather/:city", getWeather);
app.post("/api/journal", journalEntry);

app.listen(4000, () => console.log("Server running on 4000"));