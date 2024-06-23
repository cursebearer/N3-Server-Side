const EscolhaModel = require('../models/escolhaModel');

class EscolhaController {
    
    create(req, res) {
        const novaEscolha = req.body;
        const escolha = EscolhaModel.criar(novaEscolha);
        return escolha
        .then((EscolhaCriada) => res.status(200).json(EscolhaCriada))
        .catch(error => res.status(400).json(error.message));
    } 

    read(req, res) {
        const listaescolhas = EscolhaModel.listar();
        return listaescolhas
        .then((escolha) => res.status(200).json(escolha))
        .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id_escolha } = req.params;
        const  EscolhaAtualizada = req.body;
        const escolha = EscolhaModel.atualizar(EscolhaAtualizada, id_escolha);
        escolha
        .then((resultEscolhaAtualizada) => res.status(200).json(resultEscolhaAtualizada))
        .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id_escolha } = req.params;
        const escolha = EscolhaModel.deletar(id_escolha);
        escolha
        .then((resultEscolhaDeletada) => res.status(200).json(resultEscolhaDeletada))
        .catch((error) => res.status(400).json(error.message));
    }
}

module.exports = new EscolhaController();