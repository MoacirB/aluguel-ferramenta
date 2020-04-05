const express = require('express');
const routes = express.Router();

const usuario = require('../controllers/usuario');
const ferramenta = require('../controllers/ferramenta');
const alugueis = require('../controllers/alugueis');

/*Rotas de usuário*/
routes.post('/usuario', usuario.create);

routes.get('/usuario', usuario.list);

routes.put('/usuario', usuario.alter);

routes.delete('/usuario', usuario.delete);

routes.get('/usuario/:id', usuario.show);/*Não finalizado*/


/*Rotas de ferramenta*/
routes.post('/ferramenta', ferramenta.create);

routes.get('/ferramenta', ferramenta.list);

routes.put('/ferramenta', ferramenta.alter);

routes.delete('/ferramenta', ferramenta.delete);

routes.get('/ferramenta/:id', ferramenta.count);


/*Rotas de alugueis*/
routes.post('/alugueis', alugueis.create);

routes.get('/alugueis', alugueis.list);

routes.put('/alugueis', alugueis.alter);

routes.delete('/alugueis', alugueis.delete);

module.exports = routes;