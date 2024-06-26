const express = require('express');
const router = express.Router();
const BicicletaController = require("../controllers/bicicletaController");
const authMiddleware = require('../config/authMiddleware');

router.use(authMiddleware);

router.get("/text", BicicletaController.read);
router.post("/post", BicicletaController.create);
router.get('/quadro/:quadro_bicicleta', BicicletaController.readByQuadro);
router.get('/interessado/:id_interessado', BicicletaController.readByInteressado);
router.put("/put/:codigo_bicicleta", BicicletaController.update);
router.delete("/delete/:codigo_bicicleta", BicicletaController.delete);

module.exports = router;
