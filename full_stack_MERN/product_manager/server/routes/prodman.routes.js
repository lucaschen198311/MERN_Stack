const ProdManController = require('../controllers/prodman.controllers');
module.exports = function(app){
    app.get('/api', ProdManController.index);
    app.get('/api/pms', ProdManController.getAllPM);
    app.get('/api/pms/:id', ProdManController.getPM);
    app.post('/api/pms', ProdManController.createPM);
    app.put('/api/pms/:id', ProdManController.updatePM);
    app.delete('/api/pms/:id', ProdManController.deletePM);
}

