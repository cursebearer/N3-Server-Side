const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const interessadoModel = require('../models/interessadoModel');

const authController = {};

authController.login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const interessado = await interessadoModel.listarByEmail(email);

        if (!interessado) {
            return res.status(404).json({ error: 'Interessado não encontrado' });
        }

        const isMatch = await bcrypt.compare(senha, interessado.senha);

        if (!isMatch) {
            return res.status(400).json({ error: 'Senha incorreta' });
        }

        const token = jwt.sign({ id: interessado.id_interessado }, 'token', { expiresIn: '1h' });

        res.json({ token });
    } catch (err) {
        console.error('Erro ao fazer login:', err);
        res.status(500).send('Erro ao fazer login');
    }
};

module.exports = authController;