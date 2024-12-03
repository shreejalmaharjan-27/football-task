const { Router } = require("express");
const {
  getData,
  postData,
  updateData,
  deletedata,
  getYearlyStats,
  getWins,
  getAvgGoals,
} = require("../controllers/Football.controller");

const router = Router();

router.post("/add", postData);
router.get("/", getData);
router.put("/update/:id", updateData);
router.delete("/delete/:id", deletedata);
router.get("/get_stats/:year", getYearlyStats);
router.get("/get_wins", getWins);
router.get("/get_avg_goals", getAvgGoals);

module.exports = router;
