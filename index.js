const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const chefData = require("./data/chefData.json");
const popularRecipes = require("./data/popularRecipes.json");

app.get("/", (req, res) => {
  res.send("server is running");
});

app.get("/chef-data", (req, res) => {
  res.send(chefData);
});

app.get("/popular-recipes", (req, res) => {
  res.send(popularRecipes);
});

app.get("/chef-data/:id", (req, res) => {
  const id = req.params.id;

  const chefInfo = chefData.find(chef => chef.id === id);
  res.send(chefInfo);
});

app.listen(PORT, () => {
  console.log(`dragon is runnig on port`, PORT);
});
