const { Router } = require("express");
const router = Router();
const interessadoController = require("../controllers/interessadoController");

// get insert put delete

router.get("/interessados", interessadoController.read);

//router.get("/bicicletas", interessadoController.readName);

router.post("/interessados", interessadoController.create);

router.put("/interessados/:id", interessadoController.update);

router.delete("/interessados/:id", interessadoController.delete);

module.exports = router;