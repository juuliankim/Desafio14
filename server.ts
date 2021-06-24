import express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor express');
})

app.get('/prueba', (req,res)=>{
    res.send('prueba');
})
const PUERTO: number = 8080;

const server = app.listen(PUERTO, () => {
    console.log(`Servidor express typescript escuchando en http://localhost:${PUERTO}`);
});

server.on('error', error => {
    console.log('error en el servidor:', error);
});