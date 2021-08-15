const PetController = require('../controllers/pet.controllers');
module.exports = function(app){
    app.get('/api', PetController.getAllPets);
    app.get('/api/:id', PetController.getPet);
    app.post('/api/new', PetController.createPet);
    app.put('/api/:id', PetController.updatePet);
    app.delete('/api/:id', PetController.deletePet);
}

