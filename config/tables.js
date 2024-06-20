class Tabelas {
    init(connection) {
        this.connection = connection;
        this.criarTabelabicicleta();
        this.criarTabelaInteressado();
        this.criarTabelaEscolha();
    }

    criarTabelabicicleta() {
        const sql = `
       CREATE TABLE IF NOT EXISTS bicicletas (
            codigo_bicicleta INT AUTO_INCREMENT PRIMARY KEY,
            quadro_bicicleta VARCHAR(10) NOT NULL,
            cor_bicicleta VARCHAR(20) NOT NULL
        );
        `;
        
        this.connection.query(sql, (error) => {
            if (error) {
                console.error("Erro na hora de criar a tabela:");
                return;
            }
            console.log("Tabela Bicicletas criada com sucesso");
        });
    }

    criarTabelaInteressado() {
        const sql = `
        CREATE TABLE IF NOT EXISTS interessados (
            id_interessado INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100) NOT NULL,
            fone VARCHAR(15),
            email VARCHAR(100),
            altura DECIMAL(3,2) NOT NULL
        );
        `;
        
        this.connection.query(sql, (error) => {
            if (error) {
                console.error("Erro na hora de criar a tabela:");
                return;
            }
            console.log("Tabela Interessados criada com sucesso");
        });
    }

    criarTabelaEscolha() {
        const sql = `
       CREATE TABLE IF NOT EXISTS escolhas (
            id_escolha INT AUTO_INCREMENT PRIMARY KEY,
            data_escolha DATE NOT NULL,
            id_interessado INT,
            codigo_bicicleta INT,
            FOREIGN KEY (id_interessado) REFERENCES interessados(id_interessado),
            FOREIGN KEY (codigo_bicicleta) REFERENCES bicicletas(codigo_bicicleta)
        );
        `;
        
        this.connection.query(sql, (error) => {
            if (error) {
                console.error("Erro na hora de criar a tabela:");
                return;
            }
            console.log("Tabela Escolhas criada com sucesso");
        });
    }
}

module.exports = new Tabelas();