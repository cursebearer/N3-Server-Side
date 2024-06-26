const jwt = require('jsonwebtoken');
const interessadoModel = require('../models/interessadoModel');

const authController = {};

authController.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const interessado = await interessadoModel.listarByEmail(email);

        if (!interessado) {
            console.log('Interessado não encontrado');
            return res.status(404).json({ error: 'Interessado não encontrado' });
        }

        if (senha !== interessado.senha) {
            console.log('Senha incorreta');
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: interessado.id_interessado }, 'chave_secreta_do_token', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).send('Erro ao fazer login');
    }
};

module.exports = authController;
