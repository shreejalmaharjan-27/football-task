const getData = async (req, res) => {
  try {
    res.status(200).json({ message: "Success" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getData };
