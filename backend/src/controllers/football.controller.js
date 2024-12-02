const Game = require("../schemas/Game.schema");

const postData = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);

    Game.create(data);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    await Game.findByIdAndUpdate(id, data);

    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getData = async (req, res) => {
  try {
    const data = await Game.find();
    res.status(200).json({ message: "Success", data });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getData, postData, updateData };
