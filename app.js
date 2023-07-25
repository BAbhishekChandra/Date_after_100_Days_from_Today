const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  const somedate = new Date();
  const new_date = addDays(
    new Date(somedate.getFullYear(), somedate.getMonth(), somedate.getDate()),
    100
  );
  response.send(
    `${new_date.getDate()}/${new_date.getMonth() + 1}/${new_date.getFullYear()}`
  );
});
app.listen(3000);
module.exports = app;
