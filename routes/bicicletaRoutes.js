const express = require('express');
const router = express.Router();
const BicicletaController = require("../controllers/bicicletaController");

router.get("/text", BicicletaController.read);
router.post("/post", BicicletaController.create);
router.put("/put/:codigo_bicicleta", BicicletaController.update);
router.delete("/delete/:codigo_bicicleta", BicicletaController.delete);

module.exports = router;
