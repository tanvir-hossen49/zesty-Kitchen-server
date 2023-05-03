const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const chefData = require("./data/chefData.json");
app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/chef-data", (req, res) => {
  res.send(chefData);
});

app.listen(PORT, () => {
  console.log(`dragon is runnig on port`, PORT);
});
