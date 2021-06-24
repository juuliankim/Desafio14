const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((err, req, res, next) =>{
    console.error(err.message);
    res.status(500).send('Algo se rompió!!');
});

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor express');
});

app.get('/productos/listar', (req, res) => {
    try {
        res.status(200).send("lista");    
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 8081;

const server = app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});

server.on('error', error => {
    console.error('Error de servidor: ', error);
});

module.exports = server;