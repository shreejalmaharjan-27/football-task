const express = require("express");
const cors = require("cors");

const routes = require("../routes/football.routes");

const modules = async (app) => {
  app.use(express());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());

  app.use(routes);
};

module.exports = modules;
