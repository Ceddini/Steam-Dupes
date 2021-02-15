let allGamesJson = require("./json/all-games.min.json");
let dupesJson = require("./json/dupes.min.json");

const fs = require("fs");

let allGames = allGamesJson.response.games;

const games = allGames.filter(game => {
  return game.appid in dupesJson;
});

fs.writeFile("./src/json/games.min.json", JSON.stringify(games), function(err) {
  if (err) return console.log(err);

  console.log("Completed.");
});
