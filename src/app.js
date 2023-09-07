const express = require("express");
const personal = require("./personalDetails");

const app = express();

app.use(express.json());

app.get("/api", personal.getPersonalDetails);

app.all("*", (req, res) => {
  res.status(404).json({
    status: false,
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});

module.exports = app;
