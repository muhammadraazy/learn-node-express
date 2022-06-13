const express = require("express")
const router = express.Router();

const studentRoute = require("../controller/student")

router.get("/student", studentRoute)


module.exports = router;