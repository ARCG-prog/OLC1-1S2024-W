const express = require('express');
const router = express.Router();

// Controller
const indexController = require("../controller/index.controller.js")

// Routes
router.get("/", indexController.index);
router.post("/analizar", indexController.analizar);

module.exports = router;