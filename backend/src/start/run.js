const { connect } = require("mongoose");
const config = require("config");

const bootstrap = async (app) => {
  await connect(config.get("MONGO_URI"));

  const PORT = config.get("PORT");

  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
};

module.exports = bootstrap;
