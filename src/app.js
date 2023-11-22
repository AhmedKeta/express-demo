const path = require("path");
const express = require("express");
const compression = require("compression");
const createError = require(path.join(__dirname, "utils", "error"));

const app = express();

require(path.join(__dirname, "models"));
const securityProviderMW = require(path.join(
  __dirname,
  "middlewares",
  "security-provider.mw"
));
const errorMW = require(path.join(__dirname, "middlewares", "error.mw"));
const routes = require(path.join(__dirname, "routes"));

app.use(securityProviderMW);
app.use(compression());
app.use(express.json());
app.get("/", (req, res, next) => {
  next(createError("fffffffffffffffff", 418));
});
// app.use(routes);
app.use(errorMW);

module.exports = { app };
