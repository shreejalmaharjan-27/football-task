const { Router } = require("express");
const {
  getData,
  postData,
  updateData,
} = require("../controllers/Football.controller");

const router = Router();

router.put("/update/:id", updateData);
router.post("/add", postData);
router.get("/", getData);

module.exports = router;
