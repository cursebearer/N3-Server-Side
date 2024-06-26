const BicicletaModel = require('../models/bicicletaModel');

class BicicletaController {
    async create(req, res) {
        try {
            const novaBicicleta = req.body;
            const bicicletaCriada = await BicicletaModel.criar(novaBicicleta);
            res.status(201).json(bicicletaCriada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async read(req, res) {
        try {
            const listaBicicletas = await BicicletaModel.listar();
            res.status(200).json(listaBicicletas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async readByQuadro(req, res) {
        try {
            const { quadro_bicicleta } = req.params;
            const listaBicicletas = await BicicletaModel.listarByQuadro(quadro_bicicleta);
            res.status(200).json(listaBicicletas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async readByInteressado(req, res) {
        try {
            const { id_interessado } = req.params;
            const listaBicicletas = await BicicletaModel.listarByInteressado(id_interessado);
            res.status(200).json(listaBicicletas);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async update(req, res) {
        try {
            const { codigo_bicicleta } = req.params;
            const bicicletaAtualizada = req.body;
            const resultBicicletaAtualizada = await BicicletaModel.atualizar(bicicletaAtualizada, codigo_bicicleta);
            res.status(200).json(resultBicicletaAtualizada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async delete(req, res) {
        try {
            const { codigo_bicicleta } = req.params;
            const resultBicicletaDeletada = await BicicletaModel.deletar(codigo_bicicleta);
            res.status(200).json(resultBicicletaDeletada);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = new BicicletaController();
