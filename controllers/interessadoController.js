const InteressadoModel = require('../models/interessadoModel');
const bcrypt = require('bcryptjs');

class InteressadoController {
    async create(req, res) {
        const novoInteressado = req.body;

        try {
            const existenteInteressado = await InteressadoModel.listarByEmail(novoInteressado.email);
            if (existenteInteressado) {
                return res.status(400).json({ error: 'E-mail já está em uso' });
            }

            const salt = await bcrypt.genSalt(10);
            novoInteressado.senha = await bcrypt.hash(novoInteressado.senha, salt);

            const interessadoCriado = await InteressadoModel.criar(novoInteressado);
            res.status(200).json(interessadoCriado);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } 

    async read(req, res) {
        try {
            const listainteressados = await InteressadoModel.listar();
            res.status(200).json(listainteressados);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    async update(req, res) {
        const { id_interessado } = req.params;
        const InteressadoAtualizado = req.body;
        try {
            const resultInteressadoAtualizado = await InteressadoModel.atualizar(InteressadoAtualizado, id_interessado);
            res.status(200).json(resultInteressadoAtualizado);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    async delete(req, res) {
        const { id_interessado } = req.params;
        try {
            const resultInteressadoDeletado = await InteressadoModel.deletar(id_interessado);
            res.status(200).json(resultInteressadoDeletado);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}

module.exports = new InteressadoController();
