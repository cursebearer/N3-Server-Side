const express = require('express');
const app = express();
const cors = require('cors');
const bicRoutes = require('./routes/bicicletaRoutes');
const escRoutes = require('./routes/escolhaRoutes');
const intRoutes = require('./routes/interessadoRoutes');
const authRoutes = require('./routes/authRoutes');
const connection = require('./config/db');
const tabelas = require('./config/tables');

tabelas.init(connection);

const port = 3000;

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/bicicletas', cors(corsOptions) , bicRoutes);
app.use('/escolhas', cors(corsOptions) , escRoutes);
app.use('/interessados', cors(corsOptions) , intRoutes);
app.use('/user', cors(corsOptions) , authRoutes);

app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
