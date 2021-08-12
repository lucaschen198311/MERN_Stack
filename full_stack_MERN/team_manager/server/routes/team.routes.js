const TeamController = require('../controllers/team.controllers');
module.exports = function(app){
    app.get('/api', TeamController.getAllPlayers);
    app.get('/api/:id', TeamController.getPlayer);
    app.post('/api/new', TeamController.createPlayer);
    app.put('/api/:id', TeamController.updatePlayer);
    app.delete('/api/:id', TeamController.deletePlayer);
}

