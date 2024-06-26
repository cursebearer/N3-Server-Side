const express = require('express');
const router = express.Router();
const escolhaController = require("../controllers/escolhaController");
const authMiddleware = require('../config/authMiddleware');

router.use(authMiddleware);


router.get("/text", escolhaController.read);

router.post("/post", escolhaController.create);

router.put("/put/:id_escolha", escolhaController.update);

router.delete("/delete/:id_escolha", escolhaController.delete);

module.exports = router;