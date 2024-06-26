const EscolhaModel = require('../models/escolhaModel');
const validarEscolha = require('../config/validarEscolha')

class EscolhaController {
    async create(req, res) {
        const novaEscolha = req.body;
        
        try {
            await validarEscolha(novaEscolha);
            const escolhaCriada = await EscolhaModel.criar(novaEscolha);
            res.status(200).json(escolhaCriada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async read(req, res) {
        try {
            const listaescolhas = await EscolhaModel.listar();
            res.status(200).json(listaescolhas);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req, res) {
        const { id_escolha } = req.params;
        const EscolhaAtualizada = req.body;

        try {
            await validarEscolha(EscolhaAtualizada);
            const resultEscolhaAtualizada = await EscolhaModel.atualizar(EscolhaAtualizada, id_escolha);
            res.status(200).json(resultEscolhaAtualizada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async delete(req, res) {
        const { id_escolha } = req.params;

        try {
            const resultEscolhaDeletada = await EscolhaModel.deletar(id_escolha);
            res.status(200).json(resultEscolhaDeletada);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new EscolhaController();