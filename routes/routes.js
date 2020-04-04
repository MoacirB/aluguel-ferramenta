const express = require('express');
const routes = express.Router();

const usuario = require('../controllers/usuario');
const ferramenta = require('../controllers/ferramenta');

/*Rotas de usuário*/
routes.post('/usuario', usuario.create);

routes.get('/usuario', usuario.list);

routes.put('/usuario', usuario.alter);

routes.delete('/usuario', usuario.delete);


/*Rotas de ferramenta*/
routes.post('/ferramenta', ferramenta.create);

routes.get('/ferramenta', ferramenta.list);

routes.put('/ferramenta', ferramenta.alter);

routes.delete('/ferramenta', ferramenta.delete);

module.exports = routes;