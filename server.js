"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
app.get('/', function (req, res) {
    res.send('Bienvenido al servidor express');
});
app.get('/prueba', function (req, res) {
    res.send('prueba');
});
var PUERTO = 8080;
var server = app.listen(PUERTO, function () {
    console.log("Servidor express typescript escuchando en http://localhost:" + PUERTO);
});
server.on('error', function (error) {
    console.log('error en el servidor:', error);
});
