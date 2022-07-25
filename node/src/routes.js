const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController')
const DislikeController = require('./controllers/DislikeController')

const routes = express.Router();

routes.get('/',(req,res) => {
    return res.send({menssage:'Server Rodando na porta 3000'});
});
routes.post('/dev',DevController.store);
routes.get('/dev',DevController.index);
routes.post('/dev/:devId/likes',LikeController.store);
routes.post('/dev/:devId/dislikes',DislikeController.store)


module.exports = routes;