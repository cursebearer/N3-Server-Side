const jwt = require('jsonwebtoken');
const interessadoModel = require('../models/interessadoModel');

const authController = {};

authController.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        // Busca o interessado pelo e-mail
        const interessado = await interessadoModel.listarByEmail(email);

        if (!interessado) {
            console.log('Interessado não encontrado');
            return res.status(404).json({ error: 'Interessado não encontrado' });
        }

        console.log('Interessado encontrado:', interessado);

        console.log('Senha fornecida:', senha);
        console.log('Senha do banco (texto simples):', interessado.senha);

        // Comparação direta das senhas
        if (senha !== interessado.senha) {
            console.log('Senha incorreta');
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        // Gera um token JWT com o ID do interessado
        const token = jwt.sign({ id: interessado.id_interessado }, 'chave_secreta_do_token', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).send('Erro ao fazer login');
    }
};

module.exports = authController;
