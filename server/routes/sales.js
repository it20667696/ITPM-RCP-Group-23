const express = require("express");
const { getSales } = require("../controllers/sales.js");

const router = express.Router();

router.get("/sales", getSales);

module.exports = router;
