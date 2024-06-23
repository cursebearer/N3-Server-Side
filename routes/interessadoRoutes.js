const { Router } = require("express");
const router = Router();
const interessadoController = require("../controllers/interessadoController");

// get insert put delete

router.get("/text", interessadoController.read);

router.post("/post", interessadoController.create);

router.put("/put/:id_interessado", interessadoController.update);

router.delete("/delete/:id_interessado", interessadoController.delete);

module.exports = router;