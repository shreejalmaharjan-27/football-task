const { connect } = require("mongoose");
const config = require("config");
const Game = require("../schemas/Game.schema");
const csv = require("csvtojson");

const bootstrap = async (app) => {
  await connect(config.get("MONGO_URI"));

  const findData = await Game.findOne();

  const data = await csv().fromFile(__dirname + "/../samples/football.csv");

  if (!findData) {
    const importData = await Game.insertMany(data);

    console.log(importData);
  }

  const PORT = config.get("PORT");
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
};

module.exports = bootstrap;
