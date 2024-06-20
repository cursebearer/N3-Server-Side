const express = require('express');
const router = express.Router();
const escolhaController = require("../controllers/escolhaController");

// get insert put delete

router.get("/text", escolhaController.read);

router.post("/post", escolhaController.create);

router.put("/put/:id", escolhaController.update);

router.delete("/delete/:id", escolhaController.delete);

module.exports = router;