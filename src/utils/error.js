const createError = require("http-errors");

module.exports = (msg = "Internal server error", status = 500) => {
  return createError(status, msg);
};
