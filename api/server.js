const express = require("express");
// const carsRouter = require("../cars/carsRouter.js");

const server = express();

server.use(express.json());

// server.use("/api/cars", carsRouter);
server.get("/", (req, res) => {
    res.json({message: "api running"})
})

module.exports = server;
