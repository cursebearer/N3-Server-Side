const InteressadoModel = require('../models/interessadoModel')
const BicicletaModel = require("../models/bicicletaModel")

async function validarEscolha(novaEscolha) {
    const interessado = await InteressadoModel.listarById(novaEscolha.id_interessado);
    if (!interessado) {
        throw new Error('Interessado não encontrado');
    }

    const bicicleta = await BicicletaModel.listarById(novaEscolha.codigo_bicicleta);
    if (!bicicleta) {
        throw new Error('Bicicleta não encontrada');
    }

    let quadroValido = false;
    if (interessado.altura >= 1.50 && interessado.altura < 1.6 && bicicleta.quadro_bicicleta === '14') {
        quadroValido = true;
    } else if (interessado.altura >= 1.60 && interessado.altura < 1.70 && bicicleta.quadro_bicicleta === '16') {
        quadroValido = true;
    } else if (interessado.altura >= 1.70 && bicicleta.quadro_bicicleta === '17') {
        quadroValido = true;
    }

    if (!quadroValido) {
        throw new Error('Tamanho do quadro inválido para a altura do interessado');
    }
}

module.exports = validarEscolha;
