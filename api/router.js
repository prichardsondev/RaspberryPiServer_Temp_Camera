//route app request to controller
"use strict";

const { controller } = require("./controller");

module.exports = (app) => {
  app.route("/").get(controller.getHome);
  app.route("/health").get(controller.getHealth);
  app.route("/temp").get(controller.getTemp);
  app.route("/image").get(controller.getImage);
};