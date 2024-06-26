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

    atualizar(EscolhaAtualizada, id_escolha) {
        const sql = "UPDATE escolhas SET ? where id_escolha = ?";
        return this.executeQuery(sql, [EscolhaAtualizada, id_escolha]);
    }

    deletar(id_escolha) {
        const sql = "DELETE FROM escolhas WHERE id_escolha = ?";
        return this.executeQuery(sql, id_escolha);
    }
}

module.exports = new EscolhaModel();