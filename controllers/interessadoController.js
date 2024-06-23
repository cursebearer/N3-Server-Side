const InteressadoModel = require('../models/interessadoModel')

class InteressadoController {
    
    create(req, res) {
        const novoInteressado = req.body;
        const interessado = InteressadoModel.criar(novoInteressado);
        return interessado
        .then((InteressadoCriado) => res.status(200).json(InteressadoCriado))
        .catch(error => res.status(400).json(error.message));
    } 

    read(req, res) {
        const listainteressados = InteressadoModel.listar();
        return listainteressados
        .then((interessado) => res.status(200).json(interessado))
        .catch((error) => res.status(400).json(error.message));
    }

    update(req, res) {
        const { id_interessado } = req.params;
        const  InteressadoAtualizado = req.body;
        const interessado = InteressadoModel.atualizar(InteressadoAtualizado, id_interessado);
        interessado
        .then((resultInteressadoAtualizado) => res.status(200).json(resultInteressadoAtualizado))
        .catch((error) => res.status(400).json(error.message));
    }

    delete(req, res) {
        const { id_interessado } = req.params;
        const  interessado = InteressadoModel.deletar(id_interessado);
        interessado
        .then((resultInteressadoDeletado) => res.status(200).json(resultInteressadoDeletado))
        .catch((error) => res.status(400).json(error.message));
    }
}

module.exports = new InteressadoController();