const { Router } = require("express");
const { getData } = require("../controllers/Football.controller");

const router = Router();

router.get("/", getData);

module.exports = [router];
