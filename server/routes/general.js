const express = require("express");
const { getUser, getDashboardStats } = require("../controllers/general.js");

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

module.exports = router;
