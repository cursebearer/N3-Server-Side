const connection = require('../config/db');
const bcrypt = require('bcryptjs');

class InteressadoModel {
    executeQuery(sql, parametros) {
        return new Promise((resolve, reject) => {
            connection.query(sql, parametros, (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });
    }

    listar() {
        const sql = "SELECT * FROM interessados";
        return this.executeQuery(sql);
    }

    listarById(id_interessado) {
        const sql = "SELECT * FROM interessados WHERE id_interessado = ?";
        return this.executeQuery(sql, [id_interessado])
            .then(results => results[0])
            .catch(error => {
                throw error;
            });
    }

    listarByEmail(email) {
        const sql = "SELECT * FROM interessados WHERE email = ?";
        return this.executeQuery(sql, [email])
            .then(results => results[0])
            .catch(error => {
                throw error;
            });
    }

    async criar(novoInteressado) {
        const salt = await bcrypt.genSalt(10); // salt utilizado para criptografar melhor a senha
        novoInteressado.senha = await bcrypt.hash(novoInteressado.senha, salt); 

        const sql = "INSERT INTO interessados SET ?";
        return this.executeQuery(sql, novoInteressado);
    }

    atualizar(InteressadoAtualizado, id_interessado) {
        const sql = "UPDATE interessados SET ? where id_interessado = ?";
        return this.executeQuery(sql, [InteressadoAtualizado, id_interessado]);
    }

    deletar(id_interessado) {
        const sql = "DELETE FROM interessados WHERE id_interessado = ?";
        return this.executeQuery(sql, id_interessado);
    }
}

module.exports = new InteressadoModel();
