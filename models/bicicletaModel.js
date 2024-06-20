const connection = require('../config/db')

class BicicletaModel {

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
        const sql = "SELECT * FROM bicicletas";
        return this.executeQuery(sql);
    }

    /*listarNome(nome_assinante) {
        const sql = "SELECT * FROM bicicletas where nome_assinante = ? ";
        return this.executeQuery(sql, nome_assinante);
    }*/

    criar(novaBicicleta) {
        const sql = "INSERT INTO bicicletas SET ?";
        return this.executeQuery(sql, novaBicicleta);
    }

    atualizar(BicicletaAtualizada, codigo_bicicleta) {
        const sql = "UPDATE bicicletas SET ? where codigo_bicicleta = ?";
        return this.executeQuery(sql, [BicicletaAtualizada, codigo_bicicleta]);
    }

    deletar(codigo_bicicleta) {
        const sql = "DELETE FROM bicicletas WHERE codigo_bicicleta = ?";
        return this.executeQuery(sql, codigo_bicicleta);
    }
}

module.exports = new BicicletaModel();