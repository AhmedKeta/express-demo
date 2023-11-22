require("dotenv").config();
const path = require("path");
const {app} = require("./src/app");
// const database = require(path.join(__dirname, "src", "utils", "database"));

// database(() => {
app.listen(process.env.PORT || 8080, () => {
  console.log("server is running port ", process.env.PORT || 8080);
});
// });
