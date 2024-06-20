const connection = require('../config/db')

class EscolhaModel {

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
        const sql = "SELECT * FROM escolhas";
        return this.executeQuery(sql);
    }
    criar(novaEscolha) {
        const sql = "INSERT INTO escolhas SET ?";
        return this.executeQuery(sql, novaEscolha);
    }

    atualizar(EscolhaAtualizada, id) {
        const sql = "UPDATE escolhas SET ? where id = ?";
        return this.executeQuery(sql, [EscolhaAtualizada, id]);
    }

    deletar(id) {
        const sql = "DELETE FROM escolhas WHERE id = ?";
        return this.executeQuery(sql, id);
    }
}

module.exports = new EscolhaModel();