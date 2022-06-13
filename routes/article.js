const express = require("express")
const router = express.Router();
const articleRoute = require("../controller/article")

router.get("/articles", articleRoute)

module.exports = router