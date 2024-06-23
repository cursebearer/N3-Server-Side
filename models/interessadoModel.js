const connection = require('../config/db')

class InteressadoModel {

    executeQuery(sql, parametros) {
        return new Promise((resolve, reject) => {
            connection.query(sql, parametros, (error, response) =>{
                if(error) {
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
    criar(novoInteressado) {
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