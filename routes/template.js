const express = require("express")
const router = express.Router();
const templateRoute = require("../controller/template")

router.get("/template", templateRoute)

module.exports = router;